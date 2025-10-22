'use client'

import { useState, useEffect } from 'react'

interface Service {
    geoid: string
    name: string
    description: string
    image: string | null
    is_visible: {
        value: number
        label: string
    }
    created_at: string
    projects_count: number
}

interface FormData {
    fullName: string
    phoneNumber: string
    service: string
    projectBrief: string
}

interface FormErrors {
    fullName?: string
    phoneNumber?: string
    service?: string
    projectBrief?: string
}

function FormContactUs() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phoneNumber: '',
        service: '',
        projectBrief: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [touched, setTouched] = useState<Record<string, boolean>>({})
    const [services, setServices] = useState<Service[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        fetchServices()
    }, [])

    const fetchServices = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('http://main-website-api.55-iq.com/api/website/services')
            const data = await response.json()
            setServices(data.items || [])
        } catch (error) {
            console.error('Error fetching services:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const validateField = (name: keyof FormData, value: string): string | undefined => {
        switch (name) {
            case 'fullName':
                if (!value.trim()) return 'Full name is required'
                if (value.trim().length < 2) return 'Full name must be at least 2 characters'
                return undefined
            case 'phoneNumber':
                if (!value.trim()) return 'Phone number is required'
                const phoneRegex = /^[\d\s\-\+\(\)]+$/
                if (!phoneRegex.test(value)) return 'Please enter a valid phone number'
                if (value.replace(/\D/g, '').length < 7) return 'Phone number is too short'
                return undefined
            case 'service':
                if (!value) return 'Please select a service'
                return undefined
            case 'projectBrief':
                if (!value.trim()) return 'Project brief is required'
                if (value.trim().length < 10) return 'Project brief must be at least 10 characters'
                return undefined
            default:
                return undefined
        }
    }

    const handleChange = (name: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }))

        if (touched[name]) {
            const error = validateField(name, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleBlur = (name: keyof FormData) => {
        setTouched(prev => ({ ...prev, [name]: true }))
        const error = validateField(name, formData[name])
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: FormErrors = {}
        let hasErrors = false

        Object.keys(formData).forEach((key) => {
            const error = validateField(key as keyof FormData, formData[key as keyof FormData])
            if (error) {
                newErrors[key as keyof FormData] = error
                hasErrors = true
            }
        })

        setErrors(newErrors)
        setTouched({
            fullName: true,
            phoneNumber: true,
            service: true,
            projectBrief: true
        })

        if (!hasErrors) {
            try {
                setIsSubmitting(true)
                const response = await fetch('http://main-website-api.55-iq.com/api/website/visitors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.fullName,
                        phone: formData.phoneNumber,
                        visitor_message: formData.projectBrief,
                        servies_geoid: formData.service
                    })
                })

                if (response.ok) {
                    alert('Form submitted successfully!')
                    setFormData({
                        fullName: '',
                        phoneNumber: '',
                        service: '',
                        projectBrief: ''
                    })
                    setTouched({})
                } else {
                    const errorData = await response.json()
                    alert('Error submitting form: ' + (errorData.message || 'Please try again'))
                }
            } catch (error) {
                console.error('Error submitting form:', error)
                alert('Error submitting form. Please try again.')
            } finally {
                setIsSubmitting(false)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4">
            <InputField
                label="FULL NAME"
                placeholder="Enter your Full name here"
                value={formData.fullName}
                onChange={(value) => handleChange('fullName', value)}
                onBlur={() => handleBlur('fullName')}
                error={touched.fullName ? errors.fullName : undefined}
            />
            <InputField
                label="PHONE NUMBER"
                placeholder="Enter your phone number here"
                type="tel"
                value={formData.phoneNumber}
                onChange={(value) => handleChange('phoneNumber', value)}
                onBlur={() => handleBlur('phoneNumber')}
                error={touched.phoneNumber ? errors.phoneNumber : undefined}
            />
            <SelectField
                label="SERVICE YOU WANT"
                placeholder="Select the type of service"
                value={formData.service}
                onChange={(value) => handleChange('service', value)}
                onBlur={() => handleBlur('service')}
                error={touched.service ? errors.service : undefined}
                services={services}
                isLoading={isLoading}
            />
            <TextAreaField
                label="Project Brief"
                placeholder="Give us a brief overview of your project"
                value={formData.projectBrief}
                onChange={(value) => handleChange('projectBrief', value)}
                onBlur={() => handleBlur('projectBrief')}
                error={touched.projectBrief ? errors.projectBrief : undefined}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="flex py-4 px-6 justify-center items-center gap-2 rounded-lg bg-[#0F218D] text-white text-lg font-semibold leading-[110%] hover:bg-[#0a1665] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}

interface InputFieldProps {
    label: string
    placeholder: string
    type?: string
    value: string
    onChange: (value: string) => void
    onBlur: () => void
    error?: string
}

function InputField({ label, placeholder, type = "text", value, onChange, onBlur, error }: InputFieldProps) {
    return (
        <div className="flex min-w-[320px] flex-col gap-2">
            <div className={`flex py-[15px] px-6 items-center gap-2 rounded-lg border ${error ? 'border-[#E2424D]' : 'border-[#DCDCE0]'} bg-white/60`}>
                <div className="flex flex-col justify-center gap-1 grow shrink-0 basis-0">
                    <p className="text-[#484C6C] text-sm font-medium leading-[120%]">
                        {label}
                    </p>
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        className="placeholder:text-[#484C6C] text-[18px] font-medium leading-[110%] bg-transparent outline-none focus:outline-none"
                    />
                </div>
            </div>
            {error && (
                <p className="text-[#E2424D] text-sm font-medium leading-[120%]">
                    {error}
                </p>
            )}
        </div>
    )
}

interface SelectFieldProps {
    label: string
    placeholder: string
    value: string
    onChange: (value: string) => void
    onBlur: () => void
    error?: string
    services: Service[]
    isLoading: boolean
}

function SelectField({ label, placeholder, value, onChange, onBlur, error, services, isLoading }: SelectFieldProps) {
    return (
        <div className="flex min-w-[320px] flex-col gap-2">
            <div className={`flex py-[15px] px-6 items-center gap-2 rounded-lg border ${error ? 'border-[#E2424D]' : 'border-[#DCDCE0]'} bg-white/60`}>
                <div className="flex flex-col justify-center gap-1 grow shrink-0 basis-0">
                    <p className="text-[#484C6C] text-sm font-medium leading-[120%]">
                        {label}
                    </p>
                    <select
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        disabled={isLoading}
                        className="text-[#484C6C] text-[18px] font-medium leading-[110%] bg-transparent outline-none focus:outline-none appearance-none"
                    >
                        <option value="" disabled>
                            {isLoading ? 'Loading services...' : placeholder}
                        </option>
                        {services.map((service) => (
                            <option key={service.geoid} value={service.geoid}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="#484C6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {error && (
                <p className="text-[#E2424D] text-sm font-medium leading-[120%]">
                    {error}
                </p>
            )}
        </div>
    )
}

interface TextAreaFieldProps {
    label: string
    placeholder: string
    value: string
    onChange: (value: string) => void
    onBlur: () => void
    error?: string
}

function TextAreaField({ label, placeholder, value, onChange, onBlur, error }: TextAreaFieldProps) {
    return (
        <div className="flex min-w-[320px] flex-col gap-2">
            <div className={`flex py-[15px] px-6 items-start gap-2 rounded-lg border ${error ? 'border-[#E2424D]' : 'border-[#DCDCE0]'} bg-white/60`}>
                <div className="flex flex-col justify-center gap-1 grow shrink-0 basis-0">
                    <p className="text-[#484C6C] text-sm font-medium leading-[120%]">
                        {label}
                    </p>
                    <textarea
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onBlur={onBlur}
                        rows={4}
                        className="placeholder:text-[#484C6C] text-[18px] font-medium leading-[110%] bg-transparent outline-none focus:outline-none resize-none"
                    />
                </div>
            </div>
            {error && (
                <p className="text-[#E2424D] text-sm font-medium leading-[120%]">
                    {error}
                </p>
            )}
        </div>
    )
}

export default FormContactUs