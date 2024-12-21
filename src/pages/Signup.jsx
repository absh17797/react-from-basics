import React , {useState, useMemo} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Constants from "../utils/constants"

export const Signup = () => {
    const validationSchema = yup.object({
        fullName: yup
            .string()
            .required("Full Name is required")
            .min(3, "Too short!"),
        email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        password: yup
            .string()
            .matches(
                Constants.passwordRegex,
                "Password must be 8+ characters and include uppercase, lowercase, number, and special character"
            )
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Passwords must match")
            .required("Confirm Password is required"),
        gender: yup
            .string()
            .required("Gender is required"),
        country: yup
            .string()
            .required("Country is required"),
        comments: yup
            .string()
            .required("Comments are required"),
        agree: yup
            .boolean()
            .oneOf([true], "You must agree to continue"),
        hobbies: yup
            .array()
            .of(
                yup.object().shape({
                    title: yup.string().required(),
                })
            )
            .min(1, "At least one hobby must be selected")
            .required("Hobbies are required"),

    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue, getValues,
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Form Submitted Successfully!");
    };

    // Local state to manage the hobbies array as we need to make it custom 
    const [hobbies, setHobbies] = useState([]);
    const handleHobbyChange = (e) => {
        const { checked, value } = e?.target;
        let updatedHobbies;
        if (checked) {
            // Add the hobby object
            updatedHobbies = [...hobbies, { title: value }];
        } else {
            // Remove the hobby object
            updatedHobbies = hobbies?.filter((hobby) => hobby?.title !== value);
        }
        console.log("updatedHobbies ==>",updatedHobbies)

        setHobbies(updatedHobbies); // Update local state
        setValue("hobbies", updatedHobbies); // Update React Hook Form state
    };

    // const isHobbyChecked = (hobby) => {
    //     console.log("hobby ==>",hobby)
    //     return hobbies.some((item) => item.title === hobby);
    // };

    // NTD - used memo because this function was re-rendering with all the hobbies in array  
    const checkedHobbies = useMemo(() => {
        const currentHobbies = getValues("hobbies") || [];
        return new Set(currentHobbies.map((item) => item?.title));
    }, [getValues("hobbies")]);
    
    const isHobbyChecked = (hobby) => {
        return checkedHobbies?.has(hobby);
    };

    console.log(errors)
    // NTD - this console is rendering after syubmit each time I change, otherwise in starting it triggers only on click of submit 
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Full Name */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors?.fullName ? "is-invalid" : ""}`}
                        {...register("fullName")}
                        placeholder="Enter your full name"
                    />
                    <div className="invalid-feedback">{errors?.fullName?.message}</div>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors?.email ? "is-invalid" : ""}`}
                        {...register("email")}
                        placeholder="Enter your email"
                    />
                    <div className="invalid-feedback">{errors?.email?.message}</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors?.password ? "is-invalid" : ""}`}
                        {...register("password")}
                        placeholder="Enter your password"
                    />
                    <div className="invalid-feedback">{errors?.password?.message}</div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors?.confirmPassword ? "is-invalid" : ""
                            }`}
                        {...register("confirmPassword")}
                        placeholder="Confirm your password"
                    />
                    <div className="invalid-feedback">
                        {errors?.confirmPassword?.message}
                    </div>
                </div>

                {/* Gender (Radio Buttons) */}
                <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="Male"
                                {...register("gender")}
                                id="male"
                            />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="Female"
                                {...register("gender")}
                                id="female"
                            />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="text-danger">{errors?.gender?.message}</div>
                </div>

                {/* Country (Dropdown) */}
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <select
                        className={`form-select ${errors?.country ? "is-invalid" : ""}`}
                        {...register("country")}
                    >
                        <option value="">Select a country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <div className="invalid-feedback">{errors?.country?.message}</div>
                </div>

                {/* Comments (Textarea) */}
                <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <textarea
                        className={`form-control ${errors?.comments ? "is-invalid" : ""}`}
                        {...register("comments")}
                        placeholder="Enter comments"
                        rows="4"
                    ></textarea>
                    <div className="invalid-feedback">{errors?.comments?.message}</div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Hobbies</label>
                    <div>
                        {Constants.hobbies.map((hobby,index) => (
                            <div key={hobby} className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={hobby}
                                    // {...register("hobbies")} 
                                    // NTD removed this one because we are handling this field using setValue and getValue because we need to make custom payload 
                                    id={hobby}
                                    onChange={handleHobbyChange}
                                    checked={isHobbyChecked(hobby)}
                                    key={`${hobby}_${index}`}
                                    // NTD - tried adding ID to prevent rerendering of isHobbyChecked this function but didn't help
                                />
                                <label className="form-check-label" htmlFor={hobby}>
                                    {hobby}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="text-danger">{errors?.hobbies?.message}</div>
                </div>


                {/* Agree Checkbox */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className={`form-check-input ${errors?.agree ? "is-invalid" : ""}`}
                        {...register("agree")}
                        id="agree"
                    />
                    <label className="form-check-label" htmlFor="agree">
                        I agree to the terms and conditions
                    </label>
                    <div className="invalid-feedback">{errors?.agree?.message}</div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

/**
 * NOTES: 
   1. The class invalid-feedback is a pre-defined class in Bootstrap
   2. useState was used for managing the custom form fields which needs to be modified after getting value from form
   3. The state used for hobbies was setted up in form using 2 fn, setValue and getValue fns of 'react-hook-form'
   4. 

 * Learnings:
   1. Creating Forms
   2. use of react-hook-form and yup libraries
   3. Integrating Form Fields, Validation and Form Schemas usiing these libraries
   4. useState for managing extra fileld which needs to be modified before submitting form
   5. useMemo() - for preventing re-rendering of a specific function which was checking the checked checkbox.
 * CSS classes 
   1. form-check
   2. form-check-inline , form-check-label
   3. is-invalid
   4. invalid-feedback
   5. invalid-feedback doesn't work on hobbies error section - NTD
*/