import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Names=["Breaking News","Trending","Most Debated","What's New","Local News"]

const CatagoryScroll = () => {
  const [selected,setSelected]= useState("Breaking News")
  return (
    <ScrollView style={{marginBottom:10}} horizontal showsHorizontalScrollIndicator={false}>
      <View style={{
        flexDirection:'row',
      }}>
        {Names.map((name,index)=>(
          <NewSet key={index} name={name} selected={selected} setSelected={setSelected}/>
        ))}
      </View>
    </ScrollView>
  )
}

export default CatagoryScroll

const NewSet=({ name, selected, setSelected })=>(
  <View style={{
    borderBottomWidth:2,
      borderBottomColor:selected === name ? '#0C86E6' : 'grey',
  }}>
    <View style={{paddingBottom:2
      
      
    }}>
      <View style={{}}>
    <Text 
      style={{
        color: selected === name ? '#0C86E6' : 'grey', 
        fontWeight:"bold",
        fontSize:17,
        marginHorizontal:10,
      }}
      onPress={() => setSelected(name)} 
    >
      {name}
    </Text>
    </View>
    </View>
  </View>
)
