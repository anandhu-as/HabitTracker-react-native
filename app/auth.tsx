import { styles } from "@/styles/styles";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
//keyboardavoingview-to solve keyboard hiding your input feild  
const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const behaviorOS = Platform.OS === "ios" ? "padding" : "height"; //behavior-It adds padding to the bottom of the view(ios)
    const checkSignup = isSignUp ? "Create Account" : "Welcome back..."
    //to handle signUp/signIn
    const handleSwitchMode = () => setIsSignUp((curr) => !curr)
    return (
        <KeyboardAvoidingView style={styles.container} behavior={behaviorOS} >
            <View style={styles.content}>
                <Text style={styles.title}>{checkSignup}</Text>
                <TextInput
                    label="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="example@gmail.com"
                    mode="outlined"
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    autoCapitalize="none"
                    secureTextEntry
                    mode="outlined"
                    style={styles.input}
                />
            </View>
            <Button mode="contained" style={styles.button}>{isSignUp ? "SignUp" : "SignIn"}</Button>
            <Button onPress={handleSwitchMode} style={styles.button}>
                {isSignUp ? "Already have an account? Sign In" : "Dont have an account? SignUp"}
            </Button>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;
