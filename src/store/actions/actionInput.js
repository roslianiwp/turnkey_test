export const convertCase = (word) => {
    let random = '';
    for (let i = 0; i < word.length; i++) {
      if(i % 2 === 0){
          random += word.charAt(i).toLowerCase();
        } else {
            random += word.charAt(i).toUpperCase();
      }
    }
    return {
       type: "SUCCESS_CONVERT_CASE", payloadUpperCase: word.toUpperCase(), payloadRandomCase: random 
    };
};
  
export const resetForm = () => {
  return {
      type: "RESET_FORM",
  };
};