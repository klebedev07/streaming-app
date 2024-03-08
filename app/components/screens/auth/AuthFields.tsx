import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import { validEmail } from '@/shared/regex'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { FC, useState } from 'react'
import { Control, SubmitHandler, useForm } from 'react-hook-form'
import { View, Text, Pressable } from 'react-native'

interface IAuthFields {
	control: Control<IAuthFormData>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({ control, isPasswordRequired }) => {
	return (
		<>
			<Field<IAuthFormData>
				control={control}
				placeholder='Enter email'
				name='email'
				rules={{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email'
					}
				}}
				keyboardType='email-address'
			/>

			<Field<IAuthFormData>
				placeholder='Enter password'
				control={control}
				name='password'
				secureTextEntry
				rules={
					isPasswordRequired
						? {
								required: 'Password is required!',
								minLength: {
									value: 6,
									message: 'Password should be minimum 6 characters long'
								}
							}
						: {}
				}
			/>
		</>
	)
}

export default AuthFields
