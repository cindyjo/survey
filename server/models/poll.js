var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
	name: { type: String},
	question: { type: String},
	option_1: { type: String},
	option_2: { type: String},
	option_3: { type: String},
	option_4: { type: String},
	created_at: { type: Date, default: Date.now }
});
SurveySchema.path('name').required(true, 'Name cannot be blank');
SurveySchema.path('question').required(true, 'Question cannot be blank');
SurveySchema.path('option_1').required(true, 'Option 1 cannot be blank');
SurveySchema.path('option_2').required(true, 'Option 2 cannot be blank');
SurveySchema.path('option_3').required(true, 'Option 3 cannot be blank');
SurveySchema.path('option_4').required(true, 'Option 4 cannot be blank');
mongoose.model('Survey', SurveySchema);