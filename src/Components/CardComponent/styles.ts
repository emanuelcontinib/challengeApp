import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
   flex:1;
`
export const Card = styled(RectButton)`
   background-color: ${({ theme }) => theme.colors.title};
   justify-content: center;
   align-items: center;
   flex-direction: row;
   height: ${RFValue(118)}px;
   margin: ${RFValue(8)}px;
   margin-bottom:${RFValue(8)}px ; 
     width: ${RFPercentage(50)}px;
   align-self: center;
   text-align: center;
   border-radius: 25px;
 `
export const CardRocketImg = styled.Image`
   width: ${RFValue(85)}px;
   height: ${RFValue(85)}px;
   margin-right: ${RFValue(50)}px;
`
export const CardWrapperInfo = styled.View`
   flex-direction: column;
`
export const CardRocketName = styled.Text`
   font-family: ${({ theme }) => theme.fonts.bold};
   font-size: ${RFValue(18)}px;
   color: ${({ theme }) => theme.colors.boldText};
   margin-left: ${RFValue(8)}px;
   margin-bottom: ${RFValue(8)}px;
`
export const CardLaunchDate = styled.Text`
   font-family: ${({ theme }) => theme.fonts.regular};
   font-size: ${RFValue(12)}px;
   color: ${({ theme }) => theme.colors.textCard};
   margin-bottom: ${RFValue(8)}px;
   margin-left: ${RFValue(8)}px;
`

export const CardStatus = styled.View`
   background-color: ${({ theme }) => theme.colors.succes};
   width: ${RFValue(60)}px;
   height: ${RFValue(24)}px;
   border-radius: 4px;
   justify-content: center;
   margin: ${RFValue(8)}px;

`
export const CardTextStatus = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: ${RFValue(14)}px;
   color: ${({ theme }) => theme.colors.boldText};
   align-self: center;
`


export const Icon = styled(MaterialIcons)`
   color: ${({ theme }) => theme.colors.title};
   font-size: ${RFValue(24)}px;
`
