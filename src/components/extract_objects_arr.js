const newObj = [
  {
    id: "495216bd-8810-4068-a66-07828acefdeg",
    formControls: {
      sequenceNumber: {
        value: "1",
        valid: false,
        touched: false,
        disable: false,
        errorkessage: "",
      },
      fieldAlias: {
        value: {
          value: "CustomData.AcademicYcardate",
          label: "AcademicYearDate",
        },
        valid: false,
        touched: false,
        disable: false,
        errorMessage: "",
      },
    },
    orignalField: {
      Item_FieldAlias: "CustomData.AcademicYearDate",
      Item_SectionBid: "2c4eb771-6440-4545-869b-bff1bac19212",
      _typename: "Item",
      Item_Updatedby: null,
      Item_TenantBid: "Scheb771-6440-4545-869b-bff1bac1921f",
      ItemBid: "SSaf80b2-d6d4-40Se-&fdd-daf9d1ac48f4",
      Item_Title: "AcademicYeardate",
      Item_Sequence: "I",
      Item_Updatedon: null,
      updatedAt: "2021-12-16709:30:36.6782",
      Item_Createdby: null,
      Item_Createdon: null,
      createdAt: "2021-12-16T09:30:36.6782",
    },
  },
  {
    id: "e91d5b0c-0f64-45d1-96c8-c0e174c5cf8b",
    formControls: {
      sequenceNumber: {
        value: "2",
        valid: false,
        touched: false,
        disable: false,
        errorMessage: "",
      },
      fieldAlias: {
        value: {
          value: "CustomData.AcademicYearTestDec8",
          label: "AcademicYearTestDec8",
        },
        valid: false,
        touched: false,
        disable: false,
        errorMessage: "",
      },
    },
    orignalfield: {
      Item_FieldAllas: "CustomData.AcademicYearTestDec8",
      Item_SectionBid: "2c4eb771-644d-4545-869b-bffabaca9212",
      _typename: "Item",
      Item_Updatedby: null,
      Item_TenantBid: "Scheb771-644d-4545-869b-bff1bac19218",
      ItemBid: "822d0e29-5cf2-407b-9bf2-28ce92202c72",
      Item_Title: "AcademicrearTestDec8",
      Item_Sequence: "2",
      Item_Updatedon: null,
      updatedAt: "2022-01-14721:41149.9902",
      Item_Createdby: null,
      Item_Createdon: null,
      createdAt: "2022-01-14T21:41149.9902",
    },
  },
];

// extract key value pair inside nested object pair
const extract = (obj, path) => {
  const keys = path.split(".");
  let result = obj;
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
  }
  return result;
};

// extract one array of objects from array of objects with multiple keys
const extractMultiple = (arr, paths) => {
  let result = [];
  arr.map((obj, index) => {
    let hldObj = {};
    paths.map((path) => {
      let lastKey = path.split(".").pop();
      let extraction = extract(obj, path);
      hldObj[lastKey] = extraction;
      return hldObj;
    });
    result[index] = hldObj;
    return result;
  });
  return result;
};

const test = extractMultiple(newObj, [
  "formControls.sequenceNumber.value",
  "formControls.fieldAlias.value.label",
]).flat();

JSON.stringify(test);

// extract mutiple arrays with key at different levels inside array of objects
// const extractMultipleInsideArray = (arr, paths) => {
//   return arr.map((obj) => {
//     return paths.map((path) => {
//       return extract(obj, path);
//     });
//   });
// };

// extract(obj, "a.b.c.d.e");

// extractMultipleInsideArray(newObj, [
//   "formControls.sequenceNumber.value",
//   "formControls.fieldAlias.value.label",
// ]).flat();
