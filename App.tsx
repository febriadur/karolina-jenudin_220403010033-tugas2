import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = [
      {
        id: 1,
        name: 'kopi',
        price: 100,
        photo:
          'https://static.promediateknologi.id/crop/0x67:720x537/750x500/webp/photo/p1/783/2023/10/20/Screenshot_20231020-222944-841224629.jpg',
      },
      {
        id: 2,
        name: 'kopacol',
        price: 117,
        photo:
          'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/783/2023/09/12/1694477497160-1874384270.jpg',
      },
      {
        id: 3,
        name: 'kopi ',
        price: 190,
        photo:
          'https://tse1.mm.bing.net/th?id=OIP.ohqdtljCm4hBNG7AGNvj6wHaFj&pid=Api&P=0&h=180https://cf.shopee.co.id/file/6427a0c403007fcb5acbed4b54da089a',
      },
      {
        id: 4,
        name: 'kopi',
        price: 199,
        photo:
          'https://cdn.pixabay.com/photo/2015/03/05/13/53/coffee-660394_960_720.jpg',
      },
      {
        id: 5,
        name: 'kopi',
        price: 100,
        photo:
          'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/11/06/972587507.jpeg',
      },
      {
        id: 6,
        name: 'kopi',
        price: 140,
        photo:
          'http://4.bp.blogspot.com/-8x0-F5CuRIs/VcAI_DlTmuI/AAAAAAAAAB4/ZJ-mG2H5tX4/s1600/memetik-kopi-di-kebun-kopi-jolong-2.jpg',
      },
      {
        id: 7,
        name: 'kopi',
        price: 150,
        photo:
          'https://tse1.mm.bing.net/th?id=OIP.VCatOfMhKt6gJl6k5HtgUgHaFj&pid=Api&P=0&h=120',
      },
      {
        id: 8,
        name: 'kopi',
        price: 150,
        photo:
          'https://tse2.mm.bing.net/th?id=OIP.x0ckbnd-okSWfCAJLlnyRQHaHa&pid=Api&P=0&h=130',
      },
      
    ];
    setProducts(products)
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 10 }}>
        <FlatList
          data={products}
          numColumns={2}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              KOPI COLOL MANGGARAI
            </Text>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: 'white',
                maxWidth: '50%',
                maxHeight: 400,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 20,
                padding: 20,
                borderRadius: 10,
                borderWidth: 2,
                shadowRadius: 5,
              }}>
              <Image
                source={{ uri: item.photo }}
                style={{ width: 90, height: 100, borderRadius: 5 }}
              />
              <Text style={{ paddingVertical: 20 }}>{item.name}</Text>
              <Text style={{ paddingBottom: 20 }}>Price: ${item.price}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;