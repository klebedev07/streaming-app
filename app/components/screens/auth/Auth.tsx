import Loader from '@/components/ui/Loader'
import { AuthFormData } from '@/shared/types/auth.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { View, Text, Pressable } from 'react-native'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)
	const [isLoading, setLoading] = useState(false)
	const { handleSubmit, reset, control } = useForm<AuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<AuthFormData> = data => {
		const { email, password } = data
	}

	return (
		<View className='mx-2 items-center justify-center'>
			<View className='w-9/12'>
				<Text className='text-center text-white, text-4xl font-bold mb-2.5'>
					{isReg ? 'Register' : 'Login'}
				</Text>
				<Text className='text-center text-white, text-4xl font-bold mb-2.5'>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Pressable onPress={() => setIsReg(!isReg)}>
								<Text className='text-white opacity-30 text-right text-base mt-3'>
									{isReg ? 'Login' : 'Register'}
								</Text>
							</Pressable>
						</>
					)}
				</Text>
			</View>
		</View>
	)
}

export default Auth
