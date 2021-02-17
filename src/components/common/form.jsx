import React, { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const { data } = this.state;
    const result = Joi.validate(data, this.schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
  };

  handleChange = ({ currentTarget: input }) => {
    //validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //set values in state
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty({ name, value }) {
    const objToValidate = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(objToValidate, schema);
    return error ? error.details[0].message : null;
  }

  handleSubmit = (e) => {
    //prevent the default submission of the form
    //this will prevent the complete page reload
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  renderButton(label) {
    return <button className='btn btn-primary'>{label}</button>;
  }
  //disabled={this.validate()}
  renderInput(
    name,
    label,
    className,
    autoFocus = false,
    type = "text",
    obligatory = false
  ) {
    const { data, errors } = this.state;
    const styleAsterisk = { color: "red" };

    return (
      <div className='form-group mt-3'>
        <label htmlFor={name}>{label}</label>
        {obligatory && <span style={styleAsterisk}>*</span>}
        <input
          name={name}
          type={type}
          autoFocus={autoFocus ? true : false}
          value={data[name]}
          onChange={this.handleChange}
          error={errors[name]}
          className={className}
        />
        {/* If error is not null or truthy then return div */}
        {errors[name] && (
          <div className='alert alert-danger'>{errors[name]}</div>
        )}
      </div>
    );
  }

  renderRadio(name, label, className) {
    const { data, errors } = this.state;
    return (
      <div className='radio'>
        <label>
          <input
            name={name}
            type='radio'
            value={label}
            checked={data[name] === label}
            onChange={this.handleChange}
            error={errors[name]}
            className={className}
          />
          {label}
        </label>
      </div>
    );
  }

  renderSelect(name, label, items, obligatory = false) {
    const { data, errors } = this.state;

    return (
      // <Select
      //   obligatory={obligatory}
      //   name={name}
      //   value={data[name]}
      //   label={label}
      //   items={items}
      //   onChange={this.handleChange}
      //   error={errors[name]}
      // />
      <div className='form-group mt-3'>
        <label htmlFor={name}>{label}</label>
        <select
          name={name}
          value={data[name]}
          onChange={this.handleChange}
          className='custom-select custom-select-md'
          error={errors[name]}
        >
          <option key='select' default />

          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  renderTextArea(name, label, className) {
    const { data, errors } = this.state;
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <textarea
          name={name}
          rows='4'
          cols='0'
          value={data[name]}
          onChange={this.handleChange}
          className={className}
        ></textarea>
      </div>
    );
  }
}

export default Form;
