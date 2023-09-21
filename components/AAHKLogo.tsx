import React from 'react';
import { ViewStyle, Image } from 'react-native';

export interface IAAHKLogo {
    style? : ViewStyle
}

export default function AAHKLogo(props: IAAHKLogo) {
    return (
        <Image source={require('../assets/images/aahk_logo.png')}/>
    )
}
