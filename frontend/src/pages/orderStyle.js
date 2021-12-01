import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

centerFlex:{  
    display:'flex',
    alignItems:'center',
    justifyContent:'spaceBetween',
    marginBottom:10,
    marginRight:20,
},
itemName:{
    color:'#6b181b',
    fontSize:'20px',
    marginBottom:10,
    fontWeight:'bold'
},
buttonRow:{ 
    marginTop:30,
    marginBottom:30,
},
button:{
    marginRight:20,
    width:'100px',
},
totalPrice:{
    color:'black',
    textShadow:'1px 0px 5px gray'
},
itemPrice:{ 
    fontSize:'20px',
    color:'black',
    textShadow:'1px 0px 5px gray'
}
}));

 