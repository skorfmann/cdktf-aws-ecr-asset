/* eslint-disable @typescript-eslint/indent */
import { Construct } from 'constructs';
import { DataAwsRegion, EcrRepository } from '@cdktf/provider-aws';
import * as Null from '@cdktf/provider-null';
import * as hashdirectory from 'hashdirectory';

export interface EcrAssetConfig {
  readonly folder: string;
}

export class EcrAsset extends Construct {
  public readonly ecrRepository: EcrRepository;

  constructor(scope: Construct, name: string, config: EcrAssetConfig) {
    super(scope, name);

    const { folder } = config;

    const compatibleName = name.toLowerCase();

    this.ecrRepository = new EcrRepository(this, 'dockerAsset', {
      name: compatibleName,
    });

    const buildAndPush = new Null.Resource(this, 'buildAndPush', {
      dependsOn: [this.ecrRepository],
      triggers: {
        folderhash: hashdirectory.sync(folder),
      },
    });

    const imageName = this.ecrRepository.repositoryUrl;
    // needs AWS CLI v2 - Should add a check for presence or provide Docker container for building
    const command = `
      aws ecr get-login-password --region ${new DataAwsRegion(scope, 'CurrentRegion').name} |
      docker login --username AWS --password-stdin ${imageName} &&
      cd ${folder} && docker build -t ${imageName} . &&
      docker push ${imageName}
    `;
    buildAndPush.addOverride('provisioner.local-exec.command', command);
  }
}
