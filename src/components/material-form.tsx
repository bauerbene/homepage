export {}
// import { 
//     Alert, 
//     Button, 
//     Container, 
//     FormControl, 
//     FormControlLabel, 
//     FormLabel, 
//     Grid, 
//     Radio, 
//     RadioGroup, 
//     TextField, 
//     Typography 
// } from '@mui/material'
// import MuiPhoneNumber from 'material-ui-phone-number'
// import React  from 'react'

// type TMaterialFormProps = {
//     formik: number
// };

// export const MaterialForm = (props: TMaterialFormProps) => {

//     return (
//         <>
//             <Container maxWidth="xs">
//             <Grid container spacing={3}>
//                 <Grid item xs={12} >
//                     <Typography variant="h4" align="center">
//                          Form Validation
//                     </Typography>
//                 </Grid>
//                 <Grid item xs={12} >
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         size="small"
//                         label="Name"
//                         id="name"
//                         name="name"
//                         type="text"                    
//                         inputProps={{style: {textTransform: 'capitalize'}}}                                          
//                         onChange={props.formik.handleChange}
//                         onBlur={props.formik.handleBlur}
//                         value={props.formik.values.name}
//                         error={props.formik.touched.name && Boolean(props.formik.errors.name)}
//                         helperText={props.formik.touched.name && props.formik.errors.name}         
//                         InputLabelProps={{
//                             shrink: true,
//                         }}
//                     />                        
//                 </Grid>                
       
//                 <Grid item xs={12} >                    
//                     <TextField
//                         fullWidth
//                         size="small"
//                         variant="outlined"
//                         label="Email"
//                         id="email"
//                         name="email"
//                         type="email"
//                         inputProps={{style: {textTransform: 'lowercase'}}}                
//                         onChange={props.formik.handleChange}
//                         onBlur={props.formik.handleBlur}
//                         value={props.formik.values.email}
//                         error={props.formik.touched.email && Boolean(props.formik.errors.email)}
//                         helperText={props.formik.touched.email && props.formik.errors.email}
//                         InputLabelProps={{
//                             shrink: true,
//                         }}

//                     />                    
//                 </Grid>
                
//                 <Grid item xs={12} >
                    
//                     <MuiPhoneNumber
//                             variant="outlined"
//                             fullWidth
//                             size="small"
//                             name="phone"
//                             label="Phone"
//                             defaultCountry={"us"}
//                             value={props.formik.values.phone}
//                             error={props.formik.touched.phone && Boolean(props.formik.errors.phone)}
//                             helperText={props.formik.touched.phone && props.formik.errors.phone}    
//                             onChange={e => props.formik.setFieldValue("phone", e)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}

//                         />                                      
                    
//                 </Grid>      

//                 <Grid sm={12}>                        
                   
//                    <TextField label="Start Date"
//                                variant="outlined"
//                                size="small"
//                                name="startDate"
//                                id="startDate"                                
//                                type="date"
//                                style={{marginTop: '17px', marginLeft: '12px'}}
//                                defaultValue={props.formik.values.startDate}                        
//                                onChange={props.formik.handleChange}
//                                onBlur={props.formik.handleBlur}
//                                value={props.formik.values.startDate}
//                                error={props.formik.touched.startDate && Boolean(props.formik.errors.startDate)}
//                                helperText={props.formik.touched.startDate && props.formik.errors.startDate}                                   
                               
//                                InputLabelProps={{
//                                    shrink: true,
//                                }}
//                    />
               
//                </Grid>

//                 <Grid item xs={12} style={{marginTop: '17px'}}>
                
//                     <FormControl component="fieldset" className={styles.formControl}>
//                         <FormLabel component="legend" >Pick a color</FormLabel>

//                         <RadioGroup row aria-label="position" 
//                                     name="color"
//                                     onChange={props.formik.handleChange}
//                                     onBlur={props.formik.handleBlur}
//                                     value={props.formik.values.color}
//                                     error={props.formik.touched.color && Boolean(props.formik.errors.color)}
//                                     helperText={props.formik.touched.color && props.formik.errors.color}         
//                                     >
//                             <FormControlLabel
//                                 value="Red"
//                                 control={<Radio color="primary" />}
//                                 label="Red"
//                                 labelPlacement="start"                        
//                             />
//                             <FormControlLabel
//                                 value="Green"
//                                 control={<Radio color="primary" />}
//                                 label="Green"
//                                 labelPlacement="start"
//                             />                    
//                             <FormControlLabel
//                                 value="Blue"
//                                 control={<Radio color="primary" />}
//                                 label="Blue"
//                                 labelPlacement="start"
//                             />                    
//                         </RadioGroup>
                        
//                     </FormControl>       
//                     {(props.formik.touched.color && Boolean(props.formik.errors.color))?
//                     <Alert severity="error">Please choose a color</Alert>
//                     :
//                     ''
//                     }
                
//                 </Grid>
                           

//                 <Grid item xs={12} style={{marginTop: '17px'}}>
                
//                     <FormControl component="fieldset" className={styles.formControl}>
//                         <FormLabel component="legend" >Do you have a Fax Number?</FormLabel>

//                         <RadioGroup row aria-label="position" 
//                                     name="hasFaxNumber"
//                                     onChange={props.formik.handleChange}
//                                     onBlur={props.formik.handleBlur}
//                                     value={props.formik.values.hasFaxNumber}
//                                     error={props.formik.touched.hasFaxNumber && Boolean(props.formik.errors.hasFaxNumber)}
//                                     helperText={props.formik.touched.hasFaxNumber && props.formik.errors.hasFaxNumber}         
//                                     >
//                             <FormControlLabel
//                                 value="Yes"
//                                 control={<Radio color="primary" />}
//                                 label="Yes"
//                                 labelPlacement="start"                        
//                             />
//                             <FormControlLabel
//                                 value="No"
//                                 control={<Radio color="primary" />}
//                                 label="No"
//                                 labelPlacement="start"
//                             />                    
                        
//                         </RadioGroup>
                        
//                     </FormControl>       
//                     {(props.formik.touched.hasFaxNumber && Boolean(props.formik.errors.hasFaxNumber))?
//                     <Alert severity="error">Please choose Yes or No</Alert>
//                     :
//                     ''
//                     }
                
//                 </Grid>                           

//                 <Grid item xs={12} >
//                     {props.formik.values.hasFaxNumber === 'Yes'?
//                         <MuiPhoneNumber
//                             variant="outlined"
//                             fullWidth
//                             size="small"
//                             name="faxNumber"
//                             label="faxNumber"
//                             defaultCountry={"us"}
//                             value={props.formik.values.faxNumber}
//                             error={props.formik.touched.faxNumber && Boolean(props.formik.errors.faxNumber)}
//                             helperText={props.formik.touched.faxNumber && props.formik.errors.faxNumber}    
//                             onChange={e => props.formik.setFieldValue("faxNumber", e)}
//                             InputLabelProps={{
//                                 shrink: true,
//                             }}

//                         />                                      
//                     : ''
//                     }
//                 </Grid>      

//                <Grid sm={12} style={{marginTop: '17px', marginLeft: '12px'}}>                        
                   
//                    <Button variant="contained" color="primary" onClick={props.formik.handleSubmit}>Submit</Button>
//                </Grid>
//         </Grid>
//         </Container>            
//         </>
//     )
// }

