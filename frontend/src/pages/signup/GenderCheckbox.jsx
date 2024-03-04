/* eslint-disable react/prop-types */
const GenderCheckbox = ({handleCheckBox, selectGender}) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input type='checkbox' className='checkbox border-slate-900' 
                        checked={selectGender === "male"}
                        onChange={() => handleCheckBox("male")}


                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input type='checkbox' className='checkbox border-slate-900'
                    

                        checked={selectGender === "female"}
                        onChange={() => handleCheckBox("female")}
                    />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;