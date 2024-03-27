import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  user: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fffff",
    borderRadius: 16,
    border: " 4px groove #21329E",
    background: "#ffffff",
    width:"80vw",
    height:"40vh",
    marginLeft:"20px"

  },
  userDetail: {
    marginBottom: 10,
  },
  userActions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  editButton: {
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    minWidth: 70,
    alignItems: "center",
    marginTop: "7px",
  },
  deleteButton: {
    padding: 5,
    borderRadius: 5,
    marginTop: "7px",
    minWidth: 70,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    margin:"3px",
    
  },
  title: {
    color: "#13293d",
    fontFamily: "Encode Sans SC",
    fontWeight: "normal", 
    fontStyle: "normal", 
    fontSize: "25px",
    padding:"10px",
    textAlign:"center"
},
});

export default styles;