import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export const ImageSlideshow = () => {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  // auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % slideShow.length;
      flatlistRef.current.scrollToIndex({
        index: newIndex,
        animated: true,
      });
      setActiveIndex(newIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const screenWidth = Dimensions.get("window").width;
  const slideShow = [
    { id: "01", image: require("../../assets/carousel-2.jpg") },
    { id: "2", image: require("../../assets/header.jpg") },
    { id: "3", image: require("../../assets/property-2.jpg") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }}
        />
      </View>
    );
  };

  const renderDotIndicator = () => {
    return slideShow.map((dot, index) => (
      <View
        key={index.toString()}
        style={{
          backgroundColor: index === activeIndex ? "green" : "blue",
          height: 10,
          width: 10,
          borderRadius: 5,
          margin: 5,
        }}
      ></View>
    ));
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);

    setActiveIndex(index);
  };

  return (
    <View>
      <FlatList
        data={slideShow}
        ref={flatlistRef}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        {renderDotIndicator()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});
