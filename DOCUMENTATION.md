# [doxdox-plugin-github-wiki](https://github.com/neogeek/doxdox-plugin-github-wiki) *1.1.1*

> GitHub wiki export plugin for doxdox.


### index.js


#### plugin(data) 

GitHub wiki export plugin for doxdox.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| data | `Array`  | Methods parsed using a doxdox parser. | &nbsp; |




##### Examples

```javascript
parseInputs(inputs, {'parser': 'dox', 'layout': 'github-wiki'}).then(buffer => console.log(buffer));
```


##### Returns


- `Promise`  Promise with generated content.




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
