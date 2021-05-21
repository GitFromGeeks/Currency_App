// import React,{useState} from 'react';
// import { 
//   Text,
//   ScrollView,
//   View,
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   Pressable,
//   TouchableOpacity
// } from 'react-native'

// import Snackbar from "react-native-snackbar"

// const currencyPerRupee={
//   DOLLAR:0.014,
//   EURO:0.012,
//   POUND:0.011,
//   RUBEL:0.93,
//   AUDOLLAR:0.2,
//   CANDOLLAR:0.019,
//   YEN:1.54,
//   DINAR:0.0043,
//   BITCOIN:0.000004
// }

// const App=()=>{

//   const [inputValue,setInputValue]=useState(0);
//   const [resultValue,setresultValue]=useState(0);


//   const buttonPressed=(currency)=>{
//     if (!inputValue){
//       return Snackbar.show({
//         text:"Please enter a value",
//         duration:Snackbar.LENGTH_SHORT,
//         backgroundColor:"#EA7773",
//         textColor:"#000000",
//       })
//     }

//     let result= parseFloat(inputValue)*currencyPerRupee[currency]
//     setresultValue(result.toFixed(2))
//     setInputValue(0);
//   }


//   return(
//     <>
//       <ScrollView backgroundColor={styles.container}
//       keyboardShouldPersistTaps="handled"
//       contentInsetAdjustmentBehavior="automatic"
//       >
//         <SafeAreaView style={styles.container}>
//           <View style={styles.resultContainer}>
//             <Text style={styles.resultValue}>{resultValue.toString()}</Text>
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput
//             style={styles.input}
//             keyboardType="numeric"
//             placeholder="Enter Value"
//             placeholderTextColor="#c1c1c1"
//             value={inputValue}
//             onChangeText={(inputValue)=>setInputValue(inputValue)}
//             >
//             </TextInput>
//           </View>
//           <View style={styles.convertBtnContainer}>
//           {Object.keys(currencyPerRupee).map((currency)=>{
//               <TouchableOpacity
//               key={currency}
//               style={styles.converterBtn}
//               onPress={()=>buttonPressed(currency)}
//               >
//                 <Text style={styles.convertBtnText}>
//                   {currency}
//                 </Text>
//               </TouchableOpacity>
//             })}
//           </View>
//         </SafeAreaView>
//       </ScrollView>
//     </>
//   )
// }



const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1b262c"
  },
  resultContainer:{
    height:70,
    marginTop:80,
    justifyContent: 'center',
    borderColor:"#bbe1fa",
    borderWidth:2,
    alignItems:"center",
  },
  resultValue:{
    fontSize:30,
    color:"#FFFFFF",
    fontWeight:"bold"
  },
  inputContainer:{
    height:70,
    marginTop:10,
    justifyContent: 'center',
    alignItems:"center",
    borderColor:"#bbe1fa",
    borderWidth:2,
  },
  input:{
    fontSize:30,
    textAlign:"center",
    color:"#FFFFFF",
  },
  convertBtnContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10,
  },
  converterBtn:{
    alignItems:"center",
    justifyContent:"center",
    height:100,
    width:"33.3%",
    borderWidth:2,
    borderColor:"#bbe1fa",
    marginTop:10,
    backgroundColor:"#0f4c75",
  },
  convertBtnText:{
    fontSize:15,
    color:"#FFFFFF"
  }
})


import React,{useState} from 'react';
import { 
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
 } from 'react-native'


import Snackbar from "react-native-snackbar"

const currencyPerRupee={
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004
}


 const App=()=>{

    const [inputValue,setInputValue]=useState(0);
    const [resultValue,setresultValue]=useState(0);

  const buttonPressed=(currency)=>{
    if (!inputValue){
      return Snackbar.show({
        text:"Please enter a value",
        duration:Snackbar.LENGTH_SHORT,
        backgroundColor:"#EA7773",
        textColor:"#000000",
      })
    }

    let result= parseFloat(inputValue)*currencyPerRupee[currency]
    setresultValue(result.toFixed(2))
    setInputValue(0);
  }


   return(
     <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.resultContainer}>
             <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
             <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter INR Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={(inputValue)=>setInputValue(inputValue)}
             >
            </TextInput>
          </View>
          <View style={styles.convertBtnContainer}>
            {Object.keys(currencyPerRupee).map((currency)=>(
              <TouchableOpacity
              key={currency}
              style={styles.converterBtn}
              onPress={()=>buttonPressed(currency)}
              >
                <Text style={styles.convertBtnText}>
                  {currency}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
     </>
   )
 }

 export default App;