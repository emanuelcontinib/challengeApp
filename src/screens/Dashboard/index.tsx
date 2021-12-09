import { useNavigation } from "@react-navigation/core";
import * as React from 'react';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CardComponent } from "../../Components/CardComponent";
import {
   Container,
   Header,
   Icon,
   Logo,
   SearchWrapper,
   CardWrapperTitle,
   CardWrapper

} from "./styles";


//Utilizar forEach para renderização dos componentes(props);
//Aplicar LazyLoading
// Retirar Scroll
//if pro RockerStatus

export function Dashboard() {

   const navigation = useNavigation()

   return (
      <Container>
         <Header>
            <SearchWrapper>
               <Logo>SpaceX</Logo>
               <Icon name={'search'} />
            </SearchWrapper>
         </Header>
         <ScrollView>

            <CardWrapper>

               <CardWrapperTitle>
                  Launches
               </CardWrapperTitle>
               <TouchableOpacity
                  onPress={()=>{
                     navigation.navigate('LaunchDetails')
                  }}
               >

                  <CardComponent
                     rocketName={'Falcon'}
                     launchDate={'05/05/2020'}
                     status={'Success'}

                  />
               </TouchableOpacity>
            </CardWrapper>

         </ScrollView>

      </Container>
   )
}
