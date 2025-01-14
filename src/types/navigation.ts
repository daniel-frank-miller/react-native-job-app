import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
	Startup: undefined;
	Example: undefined;
	SelectionLanguage: undefined;
	Welcome: undefined;
	SignUp: undefined;
	LogIn: undefined;
	VerifyPhoneNumber: undefined;

	AddSkills: undefined;
	WorkingConditions: undefined;
	Languages: undefined;
};

export type RootScreenProps<
	S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;
