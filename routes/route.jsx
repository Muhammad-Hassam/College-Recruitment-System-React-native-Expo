import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/HomeScreen";
import Login from "../Screens/StudentLoginForm";
import CompanyRegister from "../Screens/CompanyRegister";
import StudentRegister from "../Screens/StudentRegister";
import JobCreate from "../Screens/JobCreate";
import StudentProfile from "../Screens/StudentProfile";
import StudentDashboard from "../Screens/studentDashboard";
import CompanyLoginForm from "../Screens/CompanyLoginForm";
import CompanyDashboard from "../Screens/CompanyDashboard";
import CompanyProfile from "../Screens/CompanyProfile";
import AdminLogin from "../Screens/AdminLogin";
import AdminDashboard from "../Screens/AdminDashboard";
import AdminStudents from "../Screens/AdminViewStudents";
import AdminCompany from "../Screens/AdminViewCompany";
import AdminJobs from "../Screens/AdminViewJobs";
import ViewJobs from "../Screens/ViewJobs";
import  Student from "../Screens/Student";

const Stack=createStackNavigator();

export default function Navigations(){

    return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: true,}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name="CompanyRegister" component={CompanyRegister} options={{headerShown: false,}}/>
        <Stack.Screen name="StudentRegister" component={StudentRegister} options={{headerShown: false,}}/>
        <Stack.Screen name="JobCreate" component={JobCreate} options={{headerShown: false,}}/>
        <Stack.Screen name="StudentProfile" component={StudentProfile} options={{headerShown: false,}}/>
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{headerShown: true,}}/>
        <Stack.Screen name="CompanyLoginForm" component={CompanyLoginForm} options={{headerShown: false,}}/>
        <Stack.Screen name="CompanyProfile" component={CompanyProfile} options={{headerShown: false,}}/>
        <Stack.Screen name="CompanyDashboard" component={CompanyDashboard} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminStudents" component={AdminStudents} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminCompany" component={AdminCompany} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminJobs" component={AdminJobs} options={{headerShown: false,}}/>
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{headerShown: false,}}/>
        <Stack.Screen name="ViewJobs" component={ViewJobs} options={{headerShown: false,}}/>
        <Stack.Screen name="Student" component={Student} options={{headerShown: false,}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}