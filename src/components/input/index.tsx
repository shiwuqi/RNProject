import AppTheme from '@/styles/AppTheme';
import React from 'react';
import { View, TextInput } from 'react-native';

import Style from '@/styles/Input';

type Props = {
    placeholder: string;
    onChange: (...args: any[]) => any;
    hasBorder?: boolean;
};

const Input = (props: Props) => {
    const { placeholder, onChange, hasBorder } = props;
    const { container, text } = Style(hasBorder);

    return (
        <View style={container}>
            <TextInput
                style={text}
                placeholder={placeholder}
                onChangeText={t => onChange(t)}
                placeholderTextColor={hasBorder ? AppTheme.colors.black : AppTheme.colors.purple}
            />
        </View>
    );
}

export default Input;
