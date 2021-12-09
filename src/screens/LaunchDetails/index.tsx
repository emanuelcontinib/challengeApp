import React from "react";
import { View } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import { ScrollView } from "react-native-gesture-handler";
import {
   Container,
   Header,
   Icon,
   BackWrapper,
   RocketImg,
   InfoWrapper,
   RocketName,
   RocketNameTitle,
   LaunchDate,
   LaunchDateTitle,
   LaunchSite,
   LaunchSiteTitle,
   LaunchStatus,
   LaunchStatusTitle,
   Details,
   DetailsTitle,
   RocketSummary,
   RocketSummaryTitle,
   TypeTitle,
   Type,
   WrapperStages,
   InfoWrapperFirstStage,
   FirstStage,
   FirstStageTitle,
   InfoWrappersSecondStage,
   SecondStageTitle,
   SecondStage,
   VideoView,
   FooterText
} from "./styles";

export function LaunchDetails() {
   return (
      <Container>
         <Header>
            <BackWrapper>
               <Icon name={'arrow-back'} />
            </BackWrapper>
         </Header>

         <ScrollView>
            <RocketImg source={{ uri: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' }} />

            <InfoWrapper>

               <RocketNameTitle>ROCKET</RocketNameTitle>
               <RocketName>Falcon 1</RocketName>

               <LaunchDateTitle>LAUNCH DATE</LaunchDateTitle>
               <LaunchDate>03-01-2019</LaunchDate>

               <LaunchSiteTitle>LAUNCH SITE</LaunchSiteTitle>
               <LaunchSite>CCAFS SLC 40</LaunchSite>

               <LaunchStatusTitle>LAUNCH STATUS</LaunchStatusTitle>
               <LaunchStatus>Success</LaunchStatus>

               <DetailsTitle>DETAILS</DetailsTitle>
               <Details>Last launch of the original Falcon 9 v1.0 launch vehicle</Details>

               <RocketSummaryTitle>ROCKET SUMMARY</RocketSummaryTitle>
               <RocketSummary>Falcon 9</RocketSummary>

               <TypeTitle>TYPE</TypeTitle>
               <Type>v1.0</Type>

            </InfoWrapper>

            <WrapperStages>
               <InfoWrapperFirstStage>
                  <FirstStageTitle>FIRST STAGE</FirstStageTitle>
                  <FirstStage>Cores:4</FirstStage>
               </InfoWrapperFirstStage>


               <InfoWrappersSecondStage>
                  <SecondStageTitle>SECOND STAGE</SecondStageTitle>
                  <SecondStage>Payloads:150kg</SecondStage>
               </InfoWrappersSecondStage>

            </WrapperStages>

            <VideoView>
               <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={'0a_00nJ_Y88'}
               />
            </VideoView>

            {/* <LaunchPhoto source></LaunchPhoto> */}
            <FooterText>
               SpaceX © 2021
            </FooterText>

         </ScrollView>

      </Container>
   )
}