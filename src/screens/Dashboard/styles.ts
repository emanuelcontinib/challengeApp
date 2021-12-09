import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
   flex:1;
   background-color: ${({ theme }) => theme.colors.backgroundBlack};
`
export const Header = styled.View`
   background-color: ${({ theme }) => theme.colors.backgroundBlack};
   height:${RFPercentage(20)}px ;
   padding-top: ${RFPercentage(10)}px;
   justify-content:space-between;
   align-items: center;

 `
export const Logo = styled.Text`
   font-size: ${RFValue(25)}px;
   color: ${({ theme }) => theme.colors.title};
   font-family: ${({ theme }) => theme.fonts.bold};
   padding: 0 ${RFValue(110)}px;
   align-items: center;
`
export const SearchWrapper = styled.View`
   flex-direction: row;
   align-items: center;
   justify-content: center;
`
export const CardWrapper = styled.View`
   font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.redText};
   font-size: ${RFValue(20)}px;
   align-self: center;
   background-color: ${({ theme }) => theme.colors.backgroundBlack};
   width: ${RFPercentage(50)}px;
   align-self: center;
   text-align: center;
   border-radius: 25px;
`
export const CardWrapperTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   color: ${({ theme }) => theme.colors.redText};
   font-size: ${RFValue(20)}px;
   align-self: center;
   /* margin-bottom: ${RFValue(28)}px; */
   width: ${RFPercentage(45)};
   height: ${RFValue(40)}px;
   align-self: center;
   text-align: center;
   border-radius: 25px;
   border-bottom-right-radius: 0px;
   border-bottom-left-radius: 0px;
   /* background-color: antiquewhite; */
`

export const Icon = styled(MaterialIcons)`
   color: ${({ theme }) => theme.colors.title};
   font-size: ${RFValue(24)}px;
`
