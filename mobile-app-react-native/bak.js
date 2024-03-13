import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  VirtualizedList,

} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header } from "../components/header";
import { products } from "../contents/nitafutie";
import { MyCardlistProduct } from "../contents/propertyList";
import { useDispatch } from "react-redux";
import { addItem, addToWishlist } from "../redux/actions/actions";
import { ImageSlideshow } from "../screens/slides";
import axios from "axios";
import useCategory from "../contents/category";
import { useNavigation } from "@react-navigation/native";
export const Main = ({slug}) => {
  const dispatch = useDispatch();
  const [propertyList, setPropertyList] = useState([]);
  const [plotList, setPlotList] = useState([]);
  const [frameList, setFrameList] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
const categories = useCategory()
  useEffect(() => {
    if (products && products.category) {
      let tempCategory = [];
      products.category.forEach((item) => {
        tempCategory.push(item);
      });

      setPropertyList(tempCategory);
      setPlotList(products.category[0].data);
      setFrameList(products.category[1].data);
    }
  }, []);
  useEffect(() => {
    allProperty();
  }, []);

// all Post
const allProperty = async () => {
  try {
    const { data } = await axios.get(
      "http://192.168.0.152:8080/api/v1/auth/all-post"
    );

    if (data.success) {
      setPosts(data.posts);
      //console.log(data)
    }
  } catch (error) {
    console.log(error);
  }
};


const getPostByCategory = async () => {
  try {
    const { data } = await axios.get(
      `http://192.168.0.152:8080/api/v1/auth/get-ByCategory/${params.slug}`
    );
    setPost(data?.posts);
    setCategory(data?.category);
  } catch (error) {
    console.log(error);
  }
};


  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header />
     
<ImageSlideshow/>


        <View style={{ marginTop: 20 }}>
          <FlatList
            data={categories}
            horizontal
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => (
              <TouchableOpacity

              
                style={{
                  padding: 10,
                  marginLeft: index === 0 ? 20 : 10,
                  borderRadius: 20,
                  backgroundColor: "#e0e0e0",

                  
                }}

                onPress={() => {
                  navigation.navigate("Categories", {slug} );
                }}
              >
              
                <Text style={{ color: "#000" }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={styles.sectionTitle}>Plot</Text>
        <View style={{ marginTop: 20 }}>
      
          <FlatList
            data={posts}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCardlistProduct
                item={item}
              
               
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
