# API Reference

**Classes**

Name|Description
----|-----------
[EcrAsset](#cdktf-aws-ecr-asset-ecrasset)|*No description*


**Structs**

Name|Description
----|-----------
[EcrAssetConfig](#cdktf-aws-ecr-asset-ecrassetconfig)|*No description*



## class EcrAsset  <a id="cdktf-aws-ecr-asset-ecrasset"></a>



__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new EcrAsset(scope: Construct, name: string, config: EcrAssetConfig)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **name** (<code>string</code>)  *No description*
* **config** (<code>[EcrAssetConfig](#cdktf-aws-ecr-asset-ecrassetconfig)</code>)  *No description*
  * **folder** (<code>string</code>)  *No description* 



### Properties


Name | Type | Description 
-----|------|-------------
**ecrRepository** | <code>[EcrRepository](#cdktf-provider-aws-ecrrepository)</code> | <span></span>



## struct EcrAssetConfig  <a id="cdktf-aws-ecr-asset-ecrassetconfig"></a>






Name | Type | Description 
-----|------|-------------
**folder** | <code>string</code> | <span></span>



