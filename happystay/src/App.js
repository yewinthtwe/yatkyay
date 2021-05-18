import "./App.css";
import React from "react";
import {
	TextField,
	FormControl,
	Form,
	FormLabel,
	Button,
	IconButton,
	RadioGroup,
	Radio,
	makeStyles,
	FormControlLabel,
	Container,
	Select,
	InputLabel,
	MenuItem,
} from "@material-ui/core";
import _ from "lodash";
import { streets } from "./dataStreets";
//import { nanoid } from "nanoid";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": { margin: theme.spacing(2) },
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	button: { margin: theme.spacing(2) },
	radio: { margin: theme.spacing(2) },
	renew: { margib: theme.spacing(2) },
}));

function App() {
	const classes = useStyles();
	const [formFields, setFormFields] = React.useState([
		{
			တိုင်းဒေသကြီး: "",
			မြို့နယ်: "",
			ရပ်ကွက်ကျေးရွာ: "",
			လမ်း: "",
			တည်းခိုမည့်လိပ်စာ: "",
			ဧည့်တိုင်ကြားသူအမည်: "",
			သက်သေခံကဒ်ပြား: "",

			လိင်: "",
			အဘအမည်: "",
			အမိအမည်: "",
			မွေးသက္ကရာဇ်: "",
			အသက်: "",
			အမြဲတမ်းနေရပ်လိပ်စာ: "",
			ဆက်သွယ်ရန်ဖုန်း: "",
			အီးမေးလ်: "",
			ဓာတ်ပုံ: "",
			လည်ပတ်သည့်အကြောင်းအရာ: "",
			လာရောက်သည့်ဒေသလိပ်စာ: "",
		},
	]);
	const streetObj = { လမ်း: "အနောက်ဗဟို", _id: "1" };
	const [selectedStreet, setSelectedStreet] = React.useState(streetObj);

	const handleChange = (idx, event) => {
		console.log("handleChange: Field Name:", event.target.name);
		console.log("handleChange: Field Value:", event.target.value);
		let values = [...formFields];
		values[idx][event.target.name] = event.target.value;
		setFormFields(values);
	};
	const handleSelectChange = (e) => {
		setSelectedStreet(e.target.value);
		setFormFields([...formFields, _.set(formFields, "လမ်း", streetObj.လမ်း)]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Submitting... forFields:", formFields);
	};

	const getIndex = (_id, streets) => {
		for (let i = 0; i < streets.length; i++) {
			if (streets[i]._id === _id) {
				return i;
			}
		}
		return "";
	};

	return (
		<div>
			<Container>
				<h2>ဧည့်နေထိုင်ခွင့်တိုင်ကြားလွှာ </h2>
				<form className={classes.root} onSubmit={handleSubmit}>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="လမ်းအမည်">လမ်းအမည်</InputLabel>
						<Select
							labelId="လမ်းအမည်"
							id="လမ်းအမည်"
							value={streets[getIndex(selectedStreet._id, streets)]}
							onChange={handleSelectChange}
							label="လမ်းအမည်"
						>
							{_.map(streets, (street) => (
								<MenuItem key={street._id} value={street}>
									{street.လမ်း}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					{/* <FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="ရပ်ကွက်/ကျေးရွာ">ရပ်ကွက်/ကျေးရွာ</InputLabel>
						<Select
							labelId="ရပ်ကွက်/ကျေးရွာ"
							id="ရပ်ကွက်/ကျေးရွာ"
							value={street}
							onChange={handleChange}
							label="ရပ်ကွက်/ကျေးရွာ"
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl> */}

					{_.map(formFields, (o, i) => (
						<div key={i}>
							<TextField
								label="ဧည့်တိုင်ကြားသူအမည်"
								variant="outlined"
								name="ဧည့်တိုင်ကြားသူအမည်"
								value={o.ဧည့်တိုင်ကြားသူအမည်}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="သက်သေခံကဒ်ပြား"
								variant="outlined"
								name="သက်သေခံကဒ်ပြား"
								value={o.သက်သေခံကဒ်ပြား}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="မွေးသက္ကရာဇ်"
								variant="outlined"
								name="မွေးသက္ကရာဇ်"
								value={o.မွေးသက္ကရာဇ်}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="အဘအမည်"
								variant="outlined"
								name="အဘအမည်"
								value={o.အဘအမည်}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="အမိအမည်"
								variant="outlined"
								name="အမိအမည်"
								value={o.အမိအမည်}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="အမြဲတမ်းနေရပ်လိပ်စာ"
								variant="outlined"
								name="အမြဲတမ်းနေရပ်လိပ်စာ"
								value={o.အမြဲတမ်းနေရပ်လိပ်စာ}
								multiline
								rows={4}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="ဆက်သွယ်ရန်ဖုန်း"
								variant="outlined"
								name="ဆက်သွယ်ရန်ဖုန်း"
								value={o.ဆက်သွယ်ရန်ဖုန်း}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="အီးမေးလ်"
								variant="outlined"
								name="အီးမေးလ်"
								value={o.အီးမေးလ်}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="လည်ပတ်သည့်အကြောင်းအရာ"
								variant="outlined"
								name="လည်ပတ်သည့်အကြောင်းအရာ"
								value={o.လည်ပတ်သည့်အကြောင်းအရာ}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="လာရောက်သည့်ဒေသလိပ်စာ"
								variant="outlined"
								name="လာရောက်သည့်ဒေသလိပ်စာ"
								value={o.လာရောက်သည့်ဒေသလိပ်စာ}
								onChange={(e) => handleChange(i, e)}
							/>
							<TextField
								label="တည်းခိုမည့်လိပ်စာ"
								variant="outlined"
								name="တည်းခိုမည့်လိပ်စာ"
								value={o.တည်းခိုမည့်လိပ်စာ}
								onChange={(e) => handleChange(i, e)}
							/>
							<div className={classes.radio}>
								<FormControl component="fieldset">
									<FormLabel component="legend">လိင်</FormLabel>
									<RadioGroup
										row
										aria-label="လိင်"
										name="လိင်"
										value={o.လိင်}
										onChange={(e) => handleChange(i, e)}
									>
										<FormControlLabel
											value="ကျား"
											control={<Radio />}
											label="ကျား"
											size="small"
										/>
										<FormControlLabel
											value="မ"
											control={<Radio />}
											label="မ"
											size="small"
										/>
									</RadioGroup>
								</FormControl>
							</div>
						</div>
					))}
					<Button
						className={classes.button}
						color="primary"
						variant="contained"
						type="submit"
					>
						Send
					</Button>
				</form>
			</Container>
		</div>
	);
}

export default App;
