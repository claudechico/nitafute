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
import { useNavigation } from "@react-navigation/native";
import useCategory from "../contents/category";
import axios from "axios";
export const Main = ({ itemslug }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [plot, setPlot] = useState([]);
  const [house, setHousePost] = useState([]);
  const [frame, setFrame] = useState([]);
  const categories = useCategory();
  const [post, setPost] = useState([]);

// each category data
 useEffect(()=>{
  getPlotPostList();
  getHousePostList();
  getFrametList();
 },[])
const getPlotPostList = async () => {
  try {
    const { data } = await axios.get("http://192.168.0.152:8080/api/v1/auth/get-Plot/");
    if (data.success) {
      setPlot(data?.posts);
    }
  } catch (error) {
    console.log(error);
  }
};
// get House
const getHousePostList = async () => {
  try {
    const { data } = await axios.get("http://192.168.0.152:8080/api/v1/auth/get-house/");
    if (data.success) {
      setHousePost(data?.posts);
    }
  } catch (error) {
    console.log(error);
  }
};

// frameList

const getFrametList = async () => {
  try {
    const { data } = await axios.get("http://192.168.0.152:8080/api/v1/auth/get-frame/");
    if (data.success) {
      setFrame(data?.posts);
    }
  } catch (error) {
    console.log(error);
  }
};
  // all Post

  useEffect(() => {
    allProperty();
    
  }, []);

  const allProperty = async () => {
    try {
      const { data } = await axios.get(
        "http://192.168.0.152:8080/api/v1/auth/all-post"
      );

      if (data.success) {
        setPost(data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Header />

        <ImageSlideshow />

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            What are You Looking for?
          </Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Categories", { slug: item.slug });
                }}
                style={{
                  padding: 10,
                  marginLeft: index === 0 ? 20 : 10,
                  borderRadius: 20,
                  backgroundColor: "#fff",
                }}
              >
                <Text style={{ color: "#000",fontSize:20,fontWeight:600 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <Text style={styles.sectionTitle}>Latest  Post</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={post}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCardlistProduct
                item={item}
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onaddToCategory={(x) => {
                  dispatch(addItem(item));
                }}
              />
            )}
          />
        </View>
        {/* PLot list */}


        <Text style={styles.sectionTitle}>Plot</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={plot}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCardlistProduct
                item={item}
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onaddToCategory={(x) => {
                  dispatch(addItem(item));
                }}
              />
            )}
          />
        </View>
      {/* Frame list */}

      <Text style={styles.sectionTitle}>Frame</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={frame}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCardlistProduct
                item={item}
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onaddToCategory={(x) => {
                  dispatch(addItem(item));
                }}
              />
            )}
          />
        </View>

        {/* House list */}
        <Text style={styles.sectionTitle}>House</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={house}
            horizontal
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MyCardlistProduct
                item={item}
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                onaddToCategory={(x) => {
                  dispatch(addItem(item));
                }}
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
    fontSize: 30,
    fontWeight: "600",
  },
});
