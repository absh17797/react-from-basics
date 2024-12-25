import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const validationSchema = yup.object({
  studentName: yup.string()
    .required("Student Name is required")
    .min(3, "Must be at least 3 characters"),
  qualifications: yup.array().of(
    yup.object().shape({
      course: yup.string().required("Course name is required"),
      city: yup.string().required("City is required"),
      date: yup
        .date()
        .typeError("Invalid date")
        .required("Date is required"),
    })
  )
    .min(1, "At least one qualification is required"),
});

const StudentForm = () => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      studentName: "",
      qualifications: [
        {
          course: "",
          city: "",
          date: null
        }
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "qualifications",
  });
console.log("fields =>",fields)
console.log("errors =>",errors)
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("Form Submitted Successfully!");
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Qualifications</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Student Name */}
        <div className="mb-3">
          <label className="form-label">Student Full Name</label>
          <input
            type="text"
            className={`form-control ${errors?.studentName ? "is-invalid" : ""}`}
            {...register("studentName")}
            placeholder="Enter student full name"
          />
          <div className="invalid-feedback">{errors?.studentName?.message}</div>
        </div>

        <h3>Qualifications</h3>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "15px", border: "1px solid #ccc", padding: "10px" }}>
            <div className="mb-3">
              <label className="form-label">Course Name</label>
              <input
                type="text"
                className={`form-control ${errors?.studentName ? "is-invalid" : ""}`}
                {...register(`qualifications.${index}.course`)}
                placeholder="Enter course full name"
              />
              <div className="invalid-feedback">{errors.qualifications?.[index]?.course?.message}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">City Name</label>
              <input
                type="text"
                className={`form-control ${errors?.city ? "is-invalid" : ""}`}
                {...register(`qualifications.${index}.city`)}
                placeholder="Enter city full name"
              />
              <div className="invalid-feedback">{errors.qualifications?.[index]?.city?.message}</div>
            </div>


            <div className="mb-3">
              <label className="form-label">Date</label>

              <DatePicker
                selected={(field.date && new Date(field.date)) || null} // Use field.date instead of fields[index].date
                onChange={(date) => {
                  setValue(`qualifications.${index}.date`, date, { shouldValidate: true });
                }}
                className={`form-control ${errors.qualifications?.[index]?.date ? "is-invalid" : ""}`}
                placeholderText="Select a date"
                dateFormat="yyyy-MM-dd"
              />
              <div className="invalid-feedback">
                {errors.qualifications?.[index]?.date?.message}
              </div>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => remove(index)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add More Button */}
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() => append({ course: "", city: "", date: null })}
        >
          Add More
        </button>

        <div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
