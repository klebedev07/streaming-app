import { FC } from 'react'
import { View, Text, TextInput } from 'react-native'
import { IField } from './field.interface'
import { Controller } from 'react-hook-form'
import clsx from 'clsx'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	className,
    ...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={clsx(
							'bg-[#232323] w-full border rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red' : 'border-transparent'
						)}
					>
						<TextInput
							className='text-white text-base'
							autoCapitalize={'none'}
							onBlur={onBlur}
							onChangeText={onChange}
							value={(value || '').toString()}
                            {...rest}
						/>
					</View>
                    {error && <Text className='text-red text-sm'>{error.message}</Text>}
				</>
			)}
		/>
	)
}

export default Field
