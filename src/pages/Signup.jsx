import React from "react";
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
            //   .min(6, "Password must be at least 6 characters")
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
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Form Submitted Successfully!");
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Signup Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Full Name */}
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                        {...register("fullName")}
                        placeholder="Enter your full name"
                    />
                    <div className="invalid-feedback">{errors.fullName?.message}</div>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        {...register("email")}
                        placeholder="Enter your email"
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        {...register("password")}
                        placeholder="Enter your password"
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
                            }`}
                        {...register("confirmPassword")}
                        placeholder="Confirm your password"
                    />
                    <div className="invalid-feedback">
                        {errors.confirmPassword?.message}
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
                    <div className="text-danger">{errors.gender?.message}</div>
                </div>

                {/* Country (Dropdown) */}
                <div className="mb-3">
                    <label className="form-label">Country</label>
                    <select
                        className={`form-select ${errors.country ? "is-invalid" : ""}`}
                        {...register("country")}
                    >
                        <option value="">Select a country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <div className="invalid-feedback">{errors.country?.message}</div>
                </div>

                {/* Combined Dropdown and Text Input */}
                <div className="mb-3">
                    <label className="form-label">Combined Field</label>
                    <div className="input-group">
                        <select className="form-select" {...register("fieldType")}>
                            <option value="Option1">Option 1</option>
                            <option value="Option2">Option 2</option>
                        </select>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter related value"
                            {...register("combinedInput")}
                        />
                    </div>
                </div>

                {/* Comments (Textarea) */}
                <div className="mb-3">
                    <label className="form-label">Comments</label>
                    <textarea
                        className={`form-control ${errors.comments ? "is-invalid" : ""}`}
                        {...register("comments")}
                        placeholder="Enter comments"
                        rows="4"
                    ></textarea>
                    <div className="invalid-feedback">{errors.comments?.message}</div>
                </div>

                {/* Agree Checkbox */}
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className={`form-check-input ${errors.agree ? "is-invalid" : ""}`}
                        {...register("agree")}
                        id="agree"
                    />
                    <label className="form-check-label" htmlFor="agree">
                        I agree to the terms and conditions
                    </label>
                    <div className="invalid-feedback">{errors.agree?.message}</div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};
