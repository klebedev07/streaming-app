import { UserService } from '@/services/user.service'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

export const useProfile = (setValue: UseFormSetValue<IAuthFormData>) => {
	const { data, status, isLoading } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile()
	})

	if (status === 'success') {
		setValue('email', data.email)
	}

	const { mutateAsync } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: IAuthFormData) => UserService.updateProfile(data),
		onSuccess: () => {
			Toast.show({
				text1: 'Update profile',
				text2: 'Your profile has been updated successfully',
				type: 'success'
			})
		},
		onError: er => console.log(er)
	})

	const onSubmit: SubmitHandler<IAuthFormData> = async data => {
		await mutateAsync(data)
	}

	return { isLoading, onSubmit }
}
