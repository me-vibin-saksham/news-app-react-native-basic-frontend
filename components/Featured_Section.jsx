import { View, Text,Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const information=[
    {
        image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        back_image:"https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",
        title:"Detik.com",
        updated:"12h",
        desc:"you can do what you want ut with a small short break of raisens,curd and few goodies"
    },
    {
        image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        back_image:"https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",
        title:"Munchin.com",
        updated:"4h",
        desc:"you can do what you want ut with a small short break of raisens,curd and few goodies"
    },
    {
        image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        back_image:"https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",
        title:"Buratta.com",
        updated:"1h",
        desc:"you can do what you want ut with a small short break of raisens,curd and few goodies"
    },
    {
        image:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        back_image:"https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg",
        title:"Haldwani.com",
        updated:"8h",
        desc:"you can do what you want ut with a small short break of raisens,curd and few goodies"
    },
]

const Featured_Section = () => {
  return (
    <View style={{
        marginHorizontal:10,
    }}>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
        <Text style={{color:"white",fontSize:27,fontWeight:"bold"}}>Featured For You</Text>
        <Text style={{color:"grey",fontSize:15,marginTop:10}}>See all</Text>
      </View>
      {information.map((info,index)=>(
    <View key={index}>
      <Image_Section image={info.image} bac={info.back_image} title={info.title} updated={info.updated} desc={info.desc}/>
      </View>
      ))}
    </View>
  )
}



const Image_Section=({image,bac,title,updated,desc})=>(
    <>
    <View style={{
        marginTop:22,
        flexDirection:"row",
        justifyContent:"space-between"
    }}>
        <View style={{flexDirection:"row"}}>
        <Image style={{
            height:25,
            width:25,
            borderRadius:25,
        }} source={{uri:bac}}/>
        
        <Text style={{color:"white",fontSize:18,fontWeight:"bold",marginLeft:10}}>{title}</Text>
        <Text style={{color:"grey",fontSize:15,marginTop:3,marginLeft:7}}>{updated}</Text>
        </View>
        <Entypo style={{marginTop:3}} name="dots-three-horizontal" color="white" size={24}/>

    </View>

    <View style={{
        marginTop:12,
        flexWrap:"wrap",
        height:280,
        width:390,
        borderRadius:12,
        backgroundColor:"#E0E0E2",
        // opacity:0.8
    }}>
    <Image style={{
        height:220,
        width:390,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        opacity:0.9
    }}source={{uri:image}}/>
    <View >
    <Text style={{fontSize:16,fontWeight:"500",marginHorizontal:10,}}>{desc}</Text>
    </View>
    </View>
    
    
    </>
)

export default Featured_Section