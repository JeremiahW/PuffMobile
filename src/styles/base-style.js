/**
 * @providesModule base-style
 */

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $medium: 16,
    $small:14,
    $xsmall:12,
    $borderColor:'#979799',
    $background:'#ccc'
});

export const BaseStyles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'$background',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});