const express=require('express')
const mongoose=require('mongoose')
const DailyAttendence=require('./Trainer/LiveClasses/dailyAttendence')
const MonthlyReport=require('./Trainer/LiveClasses/monthlyReport')
const ClientAttendenceReg=require('./Trainer/LiveClasses/clientAttendenceReg')
const AllBatchesDailyAttendence=require('./Trainer/AllBatches/allBatchesDailyAttendence')
const AllBatchesMonthlyReport=require('./Trainer/AllBatches/allBatchesMonthlyReport')
const AllBatchesClientAttendenceReg=require('./Trainer/AllBatches/allBatchesClientAttendenceReg')
const PTClassesDailyAttendence=require('./Trainer/PTClasses/ptClassesDailyAttendence')
const PTClassesMonthlyReport=require('./Trainer/PTClasses/ptClassesMonthlyReport')
const PTClassesClientAttendenceReg=require('./Trainer/PTClasses/ptClassesClientAttendenceReg')
const TTCClassesDailyAttendence=require('./Trainer/TTCClasses/ttcClassesDailyAttendence')
const TTCClassesMonthlyReport=require('./Trainer/TTCClasses/ttcClassesMonthlyReport')
const TTCClassesClientAttendenceReg=require('./Trainer/TTCClasses/ttcClassesClientAttendenceReg')
const AllMembersClientAttendenceReg=require('./Trainer/AllMembers/AllMembersClientAttendenceReg')
//calender
const Calender=require('./Calender/calender')
//Employee target
const SalesTarget=require('./Employee/EmployeeTarget/salesTarget')
const ClientTarget=require('./Employee/EmployeeTarget/clientTarget')
const CallsTarget=require('./Employee/EmployeeTarget/callsTarget')
const LeadsTarget=require('./Employee/EmployeeTarget/leadsTarget')
const RenewalsTarget=require('./Employee/EmployeeTarget/renewalsTarget')
const ReferralsLeadsTarget=require('./Employee/EmployeeTarget/referralsLeadsTarget')
const MediaTarget=require('./Employee/EmployeeTarget/mediaTarget')
const app=express()


app.use(express.json())

//Trainer

//Live classes

// Daily Attendence
// to create a daily attendence
app.post('/dailyattendence',async(req,res)=>{
    try{
     const dailyAttendence= await DailyAttendence.create(req.body)
     res.status(200).json(dailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/dailyattendence',async(req,res)=>{
    try{
        const dailyAttendence = await DailyAttendence.find({});
        res.status(200).json(dailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/monthlyreport',async(req,res)=>{
    try{
     const monthlyReport= await MonthlyReport.create(req.body)
     res.status(200).json(monthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/monthlyreport',async(req,res)=>{
    try{
        const monthlyReport = await MonthlyReport.find({});
        res.status(200).json(monthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a clientattendence registration
app.post('/clientattendencereg',async(req,res)=>{
    try{
     const clientAttendenceReg= await ClientAttendenceReg.create(req.body)
     res.status(200).json(clientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a clientattendence registration
app.get('/clientattendencereg',async(req,res)=>{
    try{
        const clientAttendenceReg = await ClientAttendenceReg.find({});
        res.status(200).json(clientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//All Batches

// Daily Attendence
// to create a daily attendence
app.post('/allbatchesdailyattendence',async(req,res)=>{
    try{
     const allBatchesDailyAttendence= await AllBatchesDailyAttendence.create(req.body)
     res.status(200).json(allBatchesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/allbatchesdailyattendence',async(req,res)=>{
    try{
        const allBatchesDailyAttendence = await AllBatchesDailyAttendence.find({});
        res.status(200).json(allBatchesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a monthly report
app.post('/allbatchesmonthlyreport',async(req,res)=>{
    try{
     const allBatchesMonthlyReport= await AllBatchesMonthlyReport.create(req.body)
     res.status(200).json(allBatchesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a monthly report
app.get('/allbatchesmonthlyreport',async(req,res)=>{
    try{
        const allBatchesMonthlyReport = await AllBatchesMonthlyReport.find({});
        res.status(200).json(allBatchesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a all batches clientattendence registration
app.post('/allbatchesclientattendencereg',async(req,res)=>{
    try{
     const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.create(req.body)
     res.status(200).json(allBatchesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all batches clientattendence registration
app.get('/allbatchesclientattendencereg',async(req,res)=>{
    try{
        const allBatchesClientAttendenceReg = await AllBatchesClientAttendenceReg.find({});
        res.status(200).json(allBatchesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//PT Classes

// Daily Attendence
// to create a pt classes daily attendence
app.post('/ptclassesdailyattendence',async(req,res)=>{
    try{
     const ptClassesDailyAttendence= await PTClassesDailyAttendence.create(req.body)
     res.status(200).json(ptClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a daily attendence
app.get('/ptclassesdailyattendence',async(req,res)=>{
    try{
        const ptClassesDailyAttendence = await PTClassesDailyAttendence.find({});
        res.status(200).json(ptClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a pt classes monthly report
app.post('/ptclassesmonthlyreport',async(req,res)=>{
    try{
     const ptClassesMonthlyReport= await PTClassesMonthlyReport.create(req.body)
     res.status(200).json(ptClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes monthly report
app.get('/ptclassesmonthlyreport',async(req,res)=>{
    try{
        const ptClassesMonthlyReport = await PTClassesMonthlyReport.find({});
        res.status(200).json(ptClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// ClientAttendenceReg
// to create a pt classes clientattendence registration
app.post('/ptclassesclientattendencereg',async(req,res)=>{
    try{
     const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ptClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a pt classes clientattendence registration
app.get('/ptclassesclientattendencereg',async(req,res)=>{
    try{
        const ptClassesClientAttendenceReg = await PTClassesClientAttendenceReg.find({});
        res.status(200).json(ptClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//TTC Classes

// Daily Attendence
// to create a ttc classes daily attendence
app.post('/ttclasses/dailyattendence',async(req,res)=>{
    try{
     const ttcClassesDailyAttendence= await TTCClassesDailyAttendence.create(req.body)
     res.status(200).json(ttcClassesDailyAttendence);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes daily attendence
app.get('/ttclasses/dailyattendence',async(req,res)=>{
    try{
        const ttcClassesDailyAttendence = await TTCClassesDailyAttendence.find({});
        res.status(200).json(ttcClassesDailyAttendence);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//MonthlyReprt
// to create a ttc classes monthly report
app.post('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
     const ttcClassesMonthlyReport= await TTCClassesMonthlyReport.create(req.body)
     res.status(200).json(ttcClassesMonthlyReport);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes monthly report
app.get('/ttcclasses/monthlyreport',async(req,res)=>{
    try{
        const ttcClassesMonthlyReport = await TTCClassesMonthlyReport.find({});
        res.status(200).json(ttcClassesMonthlyReport);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


// ClientAttendenceReg
// to create a ttc classes clientattendence registration
app.post('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
     const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.create(req.body)
     res.status(200).json(ttcClassesClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a ttc classes clientattendence registration
app.get('/ttcclasses/clientattendencereg',async(req,res)=>{
    try{
        const ttcClassesClientAttendenceReg = await TTCClassesClientAttendenceReg.find({});
        res.status(200).json(ttcClassesClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//All Members


// ClientAttendenceReg
// to create a all members clientattendence registration
app.post('/allmembers/clientattendencereg',async(req,res)=>{
    try{
     const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.create(req.body)
     res.status(200).json(allMembersClientAttendenceReg);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

//to get a all members clientattendence registration
app.get('/allmembers/clientattendencereg',async(req,res)=>{
    try{
        const allMembersClientAttendenceReg = await AllMembersClientAttendenceReg.find({});
        res.status(200).json(allMembersClientAttendenceReg);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//calender
//to create calender
app.post('/calender',async(req,res)=>{
    try{
     const calender= await Calender.create(req.body)
     res.status(200).json(calender);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get calender
 app.get('/calender',async(req,res)=>{
    try{
        const calender= await Calender.find({});
        res.status(200).json(calender);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get calender by id
app.get('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findById(id);
        res.status(200).json(calender);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update calender
app.put('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!calender){
            return res.status(404).json({message:`cannot find any calender with ${id}`})
        }
        const updatedCalender = await Calender.findById(id);
        res.status(200).json(updatedCalender);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a calender
app.delete('/calenders/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const calender = await Calender.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!calender){
            return res.status(404).json({message:`cannot find any calender with ${id}`})
        }
        
        res.status(200).json(calender);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Employee

//Employee Target

//Sales Target
//to create sales target

app.post('/salestarget',async(req,res)=>{
    try{
     const salesTarget= await SalesTarget.create(req.body)
     res.status(200).json(salesTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get sales target
 app.get('/salestarget',async(req,res)=>{
    try{
        const salesTarget= await SalesTarget.find({});
        res.status(200).json(salesTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get salesTarget by id
app.get('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findById(id);
        res.status(200).json(salesTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update sales target
app.put('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!salesTarget){
            return res.status(404).json({message:`cannot find any sales target with ${id}`})
        }
        const updatedSalesTarget = await SalesTarget.findById(id);
        res.status(200).json(updatedSalesTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a sales target
app.delete('/salestarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const salesTarget = await SalesTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!salesTarget){
            return res.status(404).json({message:`cannot find any sales target with ${id}`})
        }
        
        res.status(200).json(salesTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Client Target
//to create client target

app.post('/clienttarget',async(req,res)=>{
    try{
     const clientTarget= await ClientTarget.create(req.body)
     res.status(200).json(clientTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get client target
 app.get('/clienttarget',async(req,res)=>{
    try{
        const clientTarget= await ClientTarget.find({});
        res.status(200).json(clientTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get client target by id
app.get('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget = await ClientTarget.findById(id);
        res.status(200).json(clientTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update client target
app.put('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget= await ClientTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!clientTarget){
            return res.status(404).json({message:`cannot find any client target with ${id}`})
        }
        const updatedClientTarget = await ClientTarget.findById(id);
        res.status(200).json(updatedClientTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a client target
app.delete('/clienttarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const clientTarget = await ClientTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!clientTarget){
            return res.status(404).json({message:`cannot find any client target with ${id}`})
        }
        
        res.status(200).json(clientTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Calls Target
//to create calls target

app.post('/callstarget',async(req,res)=>{
    try{
     const callsTarget= await CallsTarget.create(req.body)
     res.status(200).json(callsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get calls target
 app.get('/callstarget',async(req,res)=>{
    try{
        const callsTarget= await CallsTarget.find({});
        res.status(200).json(callsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get calls target by id
app.get('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget = await CallsTarget.findById(id);
        res.status(200).json(callsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update calls target
app.put('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget= await CallsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!callsTarget){
            return res.status(404).json({message:`cannot find any calls target with ${id}`})
        }
        const updatedCallsTarget = await CallsTarget.findById(id);
        res.status(200).json(updatedCallsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a calls target
app.delete('/callstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const callsTarget = await CallsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!callsTarget){
            return res.status(404).json({message:`cannot find any calls target with ${id}`})
        }
        
        res.status(200).json(callsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//Leads Target
//to create leads target

app.post('/leadstarget',async(req,res)=>{
    try{
     const leadsTarget= await LeadsTarget.create(req.body)
     res.status(200).json(leadsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get leads target
 app.get('/leadsTarget',async(req,res)=>{
    try{
        const leadsTarget= await LeadsTarget.find({});
        res.status(200).json(leadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  leads target by id
app.get('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget = await LeadsTarget.findById(id);
        res.status(200).json(leadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update leads target
app.put('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget= await LeadsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!leadsTarget){
            return res.status(404).json({message:`cannot find any leads target with ${id}`})
        }
        const updatedLeadsTarget = await LeadsTarget.findById(id);
        res.status(200).json(updatedLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a leads target
app.delete('/leadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const leadsTarget = await LeadsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!leadsTarget){
            return res.status(404).json({message:`cannot find any leads target with ${id}`})
        }
        
        res.status(200).json(leadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//Renewals Target
//to create Renewals target

app.post('/renewalstarget',async(req,res)=>{
    try{
     const renewalsTarget= await RenewalsTarget.create(req.body)
     res.status(200).json(renewalsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Renewals target
 app.get('/renewalstarget',async(req,res)=>{
    try{
        const renewalsTarget= await RenewalsTarget.find({});
        res.status(200).json(renewalsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get renewals target by id
app.get('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget = await RenewalsTarget.findById(id);
        res.status(200).json(renewalsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update renewals target
app.put('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget= await RenewalsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!renewalsTarget){
            return res.status(404).json({message:`cannot find any renewals target with ${id}`})
        }
        const updatedRenewalsTarget = await RenewalsTarget.findById(id);
        res.status(200).json(updatedRenewalsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a renewals target
app.delete('/renewalstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const renewalsTarget = await RenewalsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!renewalsTarget){
            return res.status(404).json({message:`cannot find any renewals target with ${id}`})
        }
        
        res.status(200).json(renewalsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


//Referral Leads Target
//to create Referral Leads target

app.post('/referralsleadstarget',async(req,res)=>{
    try{
     const referralLeadsTarget= await ReferralsLeadsTarget.create(req.body)
     res.status(200).json(referralLeadsTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get Referral Leads target
 app.get('/referralsLeadsTarget',async(req,res)=>{
    try{
        const referralsLeadsTarget= await ReferralsLeadsTarget.find({});
        res.status(200).json(referralsLeadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get referral Leads target by id
app.get('/referralsLeadsTarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget = await ReferralsLeadsTarget.findById(id);
        res.status(200).json(referralsLeadsTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update referral leads Target
app.put('/referralsleadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget= await ReferralsLeadsTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!referralsLeadsTarget){
            return res.status(404).json({message:`cannot find any referrals lrad target with ${id}`})
        }
        const updatedReferralsLeadsTarget = await ReferralsLeadsTarget.findById(id);
        res.status(200).json(updatedReferralsLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a referral leads target
app.delete('/referralsleadstarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const referralsLeadsTarget = await ReferralsLeadsTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!referralsLeadsTarget){
            return res.status(404).json({message:`cannot find any referrals leads target with ${id}`})
        }
        
        res.status(200).json(referralsLeadsTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



//media Target
//to create media target

app.post('/mediatarget',async(req,res)=>{
    try{
     const mediaTarget= await MediaTarget.create(req.body)
     res.status(200).json(mediaTarget);
    }catch (error) {
     console.log(error.message);
     res.status(500).json({message:error.message})
    }
 })

 //to get media target
 app.get('/mediatarget',async(req,res)=>{
    try{
        const mediaTarget= await MediaTarget.find({});
        res.status(200).json(mediaTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to  get media target by id
app.get('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget = await MediaTarget.findById(id);
        res.status(200).json(mediaTarget);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//to update media Target
app.put('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget= await MediaTarget.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if(!mediaTarget){
            return res.status(404).json({message:`cannot find any media target with ${id}`})
        }
        const updatedmediaTarget = await MediaTarget.findById(id);
        res.status(200).json(updatedmediaTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a media target
app.delete('/mediatarget/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const mediaTarget = await MediaTarget.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if(!mediaTarget){
            return res.status(404).json({message:`cannot find any media target with ${id}`})
        }
        
        res.status(200).json(mediaTarget);
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



mongoose.set("strictQuery",false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Node api is running on port 3000')
    })
}).catch((error) =>{
    console.log(error)
})