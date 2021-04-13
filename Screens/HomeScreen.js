import * as React from 'react'
import {Text,TextInput,Button,StyleSheet,View} from 'react-native'
import {Header} from 'react-native-elements'
import {TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            text: "",
            isSearchPressed:false,
            word:"",
            lexicalCategory:'',
            definition:""

        }
    }
    
    render(){
        return(
            <View>

              <Header
              centerComponent={{text:"The Pocket Dictionary",style:{color:"black", fontSize:30}}}
                  backgroundColor = "#ff9baf"> </Header>
              

            </View>
        ) 
    }

    

}

const styles = StyleSheet.create({

    

})