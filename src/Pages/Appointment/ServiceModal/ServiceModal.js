import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PPPP')
    return (
        <>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-12'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select className="select select-bordered w-full ">
                            
                            {
                                slots.map(slot => <option  value={slot}>{ slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <input type="text" placeholder="Type here" className="input w-full input-bordered " />
                        <br />
                        <input type="submit" className='btn btn-primary w-full input-bordered ' value='Submit' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ServiceModal;