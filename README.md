# contactsApp

`contacts_application` was created with Angular@1.6.4 and Django/ Django REST framework. You are able to create a contact list, remove contacts, and call contacts.

1. [Installing](#installation)
2. [Basic Usage](#usage)

## Installation

To install, simply do the following:

Create a virtual environment for our sample project and download our required packages.

For the back end you will need to install MiniConda. A light weight virtual environment needed to run python commands and our Django server.
https://conda.io/docs/install/quick.html

After Conda is installed proceed with the following commands:

```
$ conda --create env_name django
$ source ~/miniconde3/bin/activate # This may change depending on the installation location
```
Once you are in the application directory enter the following commands:
```
$ pip install -r server/requirements.txt
$ cd client && npm install (Edit: You may need to manually install body-parser, morgan, and request. e.g. npm install morgan)
$ bower install
```

After creating your virtual environment, you can access it via these commands:
On windows:
``` $ activate your_env_name```
``` $ deactivate your_env_name```

On Mac/Linux:
```$ source activate your_env_name```
```$ source deactivate your_env_name```

Activate your environment and go into the main server folder:

Run this command to start your server:
```$ python server/manage.py runserver```

If no errors, set migrate the database:
```python server/manage.py makemigrations retail```
```python server/manage.py migrate```

Open a new tab in your terminal now to set up our client side and run our node server simultaneously.

From the client folder run ```npm start```.

If both Django server and Node server are running at the same time and there are no errors, you are now ready to use the app!

You may need to include additional settings to your wsgi.py files. Ask narminshahin@gmail.com for any assistance on this.

## Usage

Use the top contact form to enter a contact name and e.164 formatted phone number (e.g.countrycode:10-digit number)

Then hit the pink add button to complete your contact submission.

The contact list below is searchable with the given input box. Filtered by name.

You can delete a contact by clicking the trash can icon next to the given contact.
