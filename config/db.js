/**
 * Created by RihabK on 23/06/2016.
 */
var mongoose=require('mongoose');
//mongoose.connect('mongodb://firstak:firstak2016@ds040349.mlab.com:40349/sherrington');
mongoose.connect('mongodb://127.0.0.1/meanAuth');
module.exports=mongoose;
