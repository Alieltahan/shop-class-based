/* Custom Hook to handle the Products Attributes */
import produce from 'immer';
import { useState } from 'react';

export const WithForm = (Component) => {
  const Wrapper = (props) => {
    const [productOptionSelected, setProductOptionSelected] = useState([]);
    const [inputs, setInputs] = useState({});

    const handleAttributes = (ProductId, att, option) => {
      const attId = att.id;
      const optionId = option.id;
      const existingProductIndex = productOptionSelected.findIndex(
        (product) => product.id === `${ProductId}`
      );
      // If product exist
      if (existingProductIndex >= 0) {
        const existingAttIndex = productOptionSelected[
          existingProductIndex
        ].attributes.findIndex((att) => att.id === `${attId}`);
        // If Product's Attribute is selected and going to change
        if (existingAttIndex >= 0) {
          setProductOptionSelected(
            produce((draft) => {
              draft[existingProductIndex].attributes[existingAttIndex].option =
                optionId;
            })
          );
          // New Attribute of existing Product going to be added ( as capacity/color).
        } else {
          setProductOptionSelected(
            produce((draft) => {
              draft[existingProductIndex].attributes.push({
                id: attId,
                option: optionId,
              });
            })
          );
        }
        // New Product to select its Attribute
      } else {
        setProductOptionSelected(
          produce((draft) => {
            draft.push({
              id: ProductId,
              attributes: [{ id: attId, option: optionId }],
            });
          })
        );
      }
    };

    const clearProductAtt = () => {
      setProductOptionSelected(
        produce((draft) => {
          draft.pop();
        })
      );
    };

    function handleChange(e) {
      let { value, name, type } = e.target;
      // CheckBox special value for Boolean
      if (type === 'checkbox') {
        if (value === 'No') value = 'Yes';
        else value = 'No';
      }
      setInputs((prevState) => ({
        // copy the existing state
        ...prevState,
        [name]: value,
      }));
    }
    function handleFilterColors(value) {
      setInputs({ ...inputs, Color: value });
    }

    function resetForm() {
      setInputs({});
    }

    function onLoadInitInputs(obj) {
      setInputs({
        ...obj,
      });
    }
    return (
      <Component
        handleAttributes={handleAttributes}
        clearProductAtt={clearProductAtt}
        productOptionSelected={productOptionSelected}
        inputs={inputs}
        handleChange={handleChange}
        resetForm={resetForm}
        handleFilterColors={handleFilterColors}
        onLoadInitInputs={onLoadInitInputs}
        {...props}
      />
    );
  };

  return Wrapper;
};
