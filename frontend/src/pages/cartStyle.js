import { makeStyles, useTheme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

container:{  
    display:'flex',  
    flexDirection:'column',
    padding:'0px',
    marginBottom:10,
    marginTop:10,
    marginRight:30,
    marginLeft:30,  
    alignItems:'center',
    color:'#272727', 
    minHeight:'800px',
    backgroundColor:'#cfcfcf',
    boxShadow:'1px 0px 5px gray'
},
heading:{
    display:'flex', 
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:30,
    paddingRight:30, 
    fontSize:'30px',
    margin:0,
    color:'#000000',
    fontWeight:'bold',
    width:'100%',
    height:'50px',
    backgroundColor:'#ffffff'
},
closeBtn:{
    color:'#cf2327',
    fontSize:'20px',
    padding:'10px 1px 10px 1px',
    boxShadow:'1px 1px 6px gray',
    borderRadius:'10px',
    cursor:'pointer'
},
cartTool:{
    display:'flex', 
    justifyContent:'space-between',
    width:'100%',
    padding:'20px 45px 20px 45px',
    fontWeight:'bold',
},
totalBill:{
    fontSize:'20px'
},
payButton:{
    color:'#ffffff',
    backgroundColor:'#400080'
},
cartItemContainer:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    margin:'10px 10px 10px 10px',
    width:'95%',
    height:'100px',
    padding:'10px',
    boxShadow:'1px 1px 6px gray',
    padding:'20px 20px 20px 20px',
    borderRadius:'10px',
    backgroundColor:'#ffffff'
},
itemName:{
    fontWeight:'bold'
},
totalPrice:{
    color:'#ff0000'
},
delete:{
    padding:20,
    color:'#ff0000'
}
}));

 