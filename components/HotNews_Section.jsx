import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const directory=[
  {
    id:1,
    backImage:"https://cdn.pixabay.com/photo/2023/10/30/05/02/ai-generated-8351759_640.png",
    image:"https://lh3.googleusercontent.com/proxy/ay3mztEgmn56gkd9f0edJW7JQQjhDZF31Q9BCPM6fA0_2bhMBPbvFHqROZNe-djlXHFcG1Vih9aSP33bGmN7ufPmQORiwsaJbSwx5kZlKIMbSXJ4EJxVO8l8nqtNx_Y5ciCx1KWo46oBvOLhsQA",
    title:"BBC News",
    desc:"Anything can be done by anyone with a short break",
    updated:"12h",
    likes:"10k",
    comments:"2000",
    views:"100k",
  },
  {
    id:2,
    backImage:"https://cdn.pixabay.com/photo/2023/10/30/05/02/ai-generated-8351759_640.png",
    image:"https://lh3.googleusercontent.com/proxy/ay3mztEgmn56gkd9f0edJW7JQQjhDZF31Q9BCPM6fA0_2bhMBPbvFHqROZNe-djlXHFcG1Vih9aSP33bGmN7ufPmQORiwsaJbSwx5kZlKIMbSXJ4EJxVO8l8nqtNx_Y5ciCx1KWo46oBvOLhsQA",
    title:"CNN",
    desc:"Anything can be done by anyone with a short break",
    updated:"9h",
    likes:"9k",
    comments:"3000",
    views:"90k",
  },
  {
    id:3,
    backImage:"https://cdn.pixabay.com/photo/2023/10/30/05/02/ai-generated-8351759_640.png",
    image:"https://lh3.googleusercontent.com/proxy/ay3mztEgmn56gkd9f0edJW7JQQjhDZF31Q9BCPM6fA0_2bhMBPbvFHqROZNe-djlXHFcG1Vih9aSP33bGmN7ufPmQORiwsaJbSwx5kZlKIMbSXJ4EJxVO8l8nqtNx_Y5ciCx1KWo46oBvOLhsQA",
    title:"The Hindu",
    desc:"Anything can be done by anyone with a short break",
    updated:"4h",
    likes:"8k",
    comments:"5000",
    views:"40k",
  },
  {
    id:4,
    backImage:"https://cdn.pixabay.com/photo/2023/10/30/05/02/ai-generated-8351759_640.png",
    image:"https://lh3.googleusercontent.com/proxy/ay3mztEgmn56gkd9f0edJW7JQQjhDZF31Q9BCPM6fA0_2bhMBPbvFHqROZNe-djlXHFcG1Vih9aSP33bGmN7ufPmQORiwsaJbSwx5kZlKIMbSXJ4EJxVO8l8nqtNx_Y5ciCx1KWo46oBvOLhsQA",
    title:"Book My Show",
    desc:"Anything can be done by anyone with a short break",
    updated:"8h",
    likes:"6k",
    comments:"60000",
    views:"100k",
  },
]

const HotNewsSection = () => {

  return (
    <View style={{ marginTop: 10, marginLeft: 10,marginBottom:25 }}>
      <Text style={{ fontWeight: "bold", fontSize: 27, color: "white" }}>Hot News</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "grey", fontSize: 15 }}>Updated 19 mins ago</Text>
        <Text style={{ color: "grey", fontSize: 15,marginRight:10, }}>Today 14 Feb</Text>
      </View>
      
      {/* Image-section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {directory.map((info, index) => (
        <View key={index} style={{ marginTop: 15 }}>
          <ImageSections images={info.image} titleImage={info.backImage} title={info.title} time={info.updated} description={info.desc} likes={info.likes} comments={info.comments} views={info.views} id={info.id}/>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const ImageSections = ({ images,titleImage,title,time,description,likes,comments,views,id }) => (
  
    <View style={{marginRight:20}}>
      {/* background-Image */}
    <Image style={{height:210, width:340,borderRadius:8,opacity:0.4}} source={{uri:images}}/>

    {/* trending-tab */}
    <View style=
    {{position:"absolute",
    height:35,width:140,
    backgroundColor:"#1C1C27",
    justifyContent:"centre",
    alignItems:"center",
    borderRadius:25,
    top:10,
    left:10,
     }}>
      <View style={{flexDirection:"row"}}>
      <Text style={{color:"white",fontSize:18,fontWeight:"500",marginTop:3}}>Trending</Text>
      <Text style={{color:"white",fontSize:18,fontWeight:"500",marginTop:3,marginLeft:5}}>{id}</Text>
      <FontAwesome5 style={{marginTop:4,marginLeft:5}} name="fire" size={21} color="#F43824"/>
      </View>
    </View>

    {/* logo title and updates-time */}
    <View style={{position:"absolute",bottom:78,left:20,flexDirection:"row"}}>
    <Image style={{height:25, width:25,borderRadius:15,borderColor:"black",borderWidth:0.2}} source={{uri:titleImage}}/>
    <Text style={{color:"white",marginLeft:10,marginTop:3}}>{title}</Text>
    <Text style={{color:"white",marginLeft:10,marginTop:3}}>{time}</Text>
    </View>

    {/* description */}
    <View style={{position:"absolute",bottom:32,left:20,}}>
      <Text style={{fontSize:18,fontWeight:"500", color:"white"}}>{description}</Text>
    </View>

    {/* likes comments views */}
    <View style={{position:"absolute",bottom:10,left:20,flexDirection:"row"}}>
      <AntDesign name='like2' size={18} color="white"/>
      <Text style={{color:"white",fontSize:14,fontWeight:"500",marginRight:10}}>{likes}</Text>
      <FontAwesome name='comment-o' size={18} color="white"/>
      <Text style={{color:"white",fontSize:14,fontWeight:"500",marginRight:10,marginLeft:3}}>{comments}</Text>
      <AntDesign name='eye' size={18} color="white"/>
      <Text style={{color:"white",fontSize:14,fontWeight:"500",marginRight:10}}>{views}</Text>

    </View>
    </View>
);

export default HotNewsSection;