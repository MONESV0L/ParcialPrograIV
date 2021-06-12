import state from '../models/state'

export const createsState = async (req, res) => {
    const {UserName, StateUser, Description, imgUrl} = req.body

    const newState = new state({UserName, StateUser, Description, imgUrl});
    //Metodo para guardar y que sea asincrono
    const StateSaved = await newState.save()


    res.status(201).json(StateSaved) 

}

export const getState = async (req, res) => {
    const states = await state.find();
    res.json(states)
}

export const getStateById = async (req, res) => {
    const states = await state.findById(req.params.stateId);
    res.status(200).json(states)
    
}

export const updateStateById  = async (req, res) => {
    const updateState = await state.findByIdAndUpdate(req.params.stateId, req.body, {
        new: true
    })
    res.status(200).json(updateState)
}

export const deleteStateById = async (req, res) => {
    const deletedstate = await state.findByIdAndDelete(req.params.stateId)
    res.status(204).json()
    
}