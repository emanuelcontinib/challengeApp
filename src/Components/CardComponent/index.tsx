import React from "react"
import { RectButtonProps, TouchableOpacity } from "react-native-gesture-handler";
import {
   Card,
   CardRocketImg,
   CardWrapperInfo,
   CardRocketName,
   CardLaunchDate,
   CardTextStatus,
   CardStatus
} from "./styles";

interface Props extends RectButtonProps{
   rocketName: string;
   launchDate: string;
   status: string;
}

export function CardComponent({
   rocketName,
   launchDate,
   status,
   ...rest
}: Props) {


   return (
      
         <Card {...rest}>
            <CardRocketImg source={{ uri: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png' }} />
            <CardWrapperInfo>
               <CardRocketName>
                  {rocketName}
               </CardRocketName>
               <CardLaunchDate>
                  {launchDate}
               </CardLaunchDate>
               <CardStatus>
                  <CardTextStatus>
                     {status}
                  </CardTextStatus>
               </CardStatus>
            </CardWrapperInfo>
         </Card>
   )
}