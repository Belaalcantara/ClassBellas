import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
        backgroundColor: "#f0f2f0"
    },
    title: {
        color: "#13293d",
      
        fontFamily: "Encode Sans SC",
        fontWeight: "normal", 
        fontStyle: "normal", 
        fontSize: "25px",
        padding:"10px"
    },
    img:{
        width:"100vw",
        height:"30vh",
        margin: "20px"
    },
    ftLado:{
        width:"190px",
        height:"130px"
     },
     imgPerfil:{
    width:"60vw",
    height:"30vh",
    borderRadius:"100%",
   marginLeft:"66px",
   border: "8px ridge #003077",
background: "#ffffff",
marginBottom:"15px",
marginTop:"15px"
     },
     LinkPG:{
        color:"#000028",
        fontSize:"15px",
        marginTop:"20px",
        textAlign:"center"
     },
     icons:{
        display:"flex",
        alignItems:"center",
     },

     text:{
        fontSize:"15px",
        justifyContent:"center",
        margin:"6px",
        padding:"3px"
     }


    




    

})

export default styles;
