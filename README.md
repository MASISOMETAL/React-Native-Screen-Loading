# Pantalla Loading para React Native


### Como instalar?

- Hacer clone del GitHub, abrir una terminal y ejecutar el codigo

`$ npm install`

#### Pantalla Loading

En la Screen Loading.js esta toda la configuracion de nuestro loading

#### Dependencias necesarias

- React Native Progress

- instalacion:

`$ npm install react-native-progress --save`

- Import y su uso:

```javascript
import { Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';

const { height, width } = Dimensions.get("window")

const Progress = () =>{
	<Progress.Bar progress={progress} width={width * 0.65} />
}

export default Progress;
```
