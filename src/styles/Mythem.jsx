const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
          ? {
            ali:{
  
              main:"#647488"
            },
            favcolor:{
  main:grey[300]
  
            }
            }
          : {
              // palette values for dark mode
              ali:{
  
                main:"teal"
              },
              favcolor:{
                main:grey[700]
               
                
                          }
         
          
            }),
      },
  });
  export default getDesignTokens
  