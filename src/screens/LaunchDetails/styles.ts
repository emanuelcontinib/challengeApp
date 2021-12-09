import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
   flex:1;
   background-color: ${({ theme }) => theme.colors.backgroundBlack};
`
export const Header = styled.View`
   background-color: ${({ theme }) => theme.colors.backgroundBlack};
   height:${RFPercentage(18)}px ;
   padding-top: ${RFPercentage(10)}px;
   align-items: center;
 `

export const BackWrapper = styled.View`
   align-items: center;
   justify-content: flex-start;
   margin-right: ${RFPercentage(45)}px;
`
export const RocketImg = styled.Image`
   width: ${RFValue(150)}px;
   height: ${RFValue(150)}px;
   align-self: center;
   margin-bottom:${RFValue(35)}px ;
`
export const InfoWrapper = styled.View`
   margin-left: ${RFValue(30)}px;
`

export const RocketNameTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px; 
   line-height: ${RFValue(20)}px;
`
export const RocketName = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const LaunchDateTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px; 
   line-height: ${RFValue(20)}px;
`
export const LaunchDate = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const LaunchSiteTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const LaunchSite = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const LaunchStatusTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const LaunchStatus = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const DetailsTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px; 
   line-height: ${RFValue(20)}px;
`
export const Details = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const RocketSummaryTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const RocketSummary = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const TypeTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const Type = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const FirstStageTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const FirstStage = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const SecondStageTitle = styled.Text`
   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.redText};
   font-size: ${RFValue(13)}px;
   line-height: ${RFValue(20)}px;
`
export const SecondStage = styled.Text`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
   padding-bottom: ${RFValue(18)}px;
`

export const WrapperStages = styled.View`
   flex-direction: row;
   margin-left: ${RFValue(30)}px;
`

export const InfoWrapperFirstStage = styled.View`
   flex-direction: column;
`

export const InfoWrappersSecondStage = styled.View`
   flex-direction: column;
   justify-content:space-between; 
   margin-left:${RFValue(100)}px;
`

export const LaunchPhoto = styled.Image`
   font-family: ${({theme})=>theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(18)}px;
`

export const VideoView = styled.View`
   flex: 1;
   margin: ${RFValue(25)}px;
`

export const FooterText=styled.Text`
   font-family: ${({theme})=> theme.fonts.regular};
   color: ${({theme})=>theme.colors.title};
   font-size: ${RFValue(12)}px;
   align-self: center;
`


//Quando estilizar ícones de libs através do styled, deixar por último,sempre
export const Icon = styled(MaterialIcons)`
   color: ${({ theme }) => theme.colors.title};
   font-size: ${RFValue(24)}px;
`
