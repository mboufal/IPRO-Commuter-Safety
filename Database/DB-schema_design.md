<span style="text-decoration:underline;">Schema Design </span>

DATABASE: Accident Reports



* Tables:
    * Column names (value type)
* Users:
    * id (num, text)
    * fname (text)
    * lname (text)
    * a_number (number)
* Reports
    * id (num, text)
    * date (date MM-DD-YYYY)
    * time (HH:MM:SS)
    * location (GPS)
    * accident_id (num, text)
    * user_id (num, text)
* Accidents
    * id (num, text)
    * name (text)
    * crime_lvl_id (num)
    * description (text)
* Levels
    * id (num, text)
    * name (text)
    * action_todo (text)

EXAMPLES:



* Users

<table>
  <tr>
   <td>
<strong>Id</strong>
   </td>
   <td><strong>Fname </strong>
   </td>
   <td><strong>Lname </strong>
   </td>
   <td><strong>A_number</strong>
   </td>
  </tr>
  <tr>
   <td>001
   </td>
   <td>Joe
   </td>
   <td>Smith
   </td>
   <td>2056874
   </td>
  </tr>
  <tr>
   <td>002
   </td>
   <td>Emily
   </td>
   <td>Green
   </td>
   <td>3454565
   </td>
  </tr>
</table>




* Reports 

<table>
  <tr>
   <td>
<strong>id</strong>
   </td>
   <td><strong>date</strong>
   </td>
   <td><strong>Time</strong>
   </td>
   <td><strong>Location</strong>
   </td>
   <td><strong>Accident_id</strong>
   </td>
   <td><strong>User_id</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>101
   </td>
   <td>02-08-2022
   </td>
   <td>18:54:27
   </td>
   <td>41.831, -87.627
   </td>
   <td>A1
   </td>
   <td>001
   </td>
   <td>While walking out of the IIT tower
   </td>
  </tr>
  <tr>
   <td>102
   </td>
   <td>02-08-2022
   </td>
   <td>20:04:56
   </td>
   <td>41.838, -87.624
   </td>
   <td>A4
   </td>
   <td>002
   </td>
   <td>3 students reported symptoms of flu
   </td>
  </tr>
</table>




* Accidents

<table>
  <tr>
   <td>
<strong>id</strong>
   </td>
   <td><strong>name</strong>
   </td>
   <td><strong>Crime_lvl</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>A1
   </td>
   <td>Robbery
   </td>
   <td>1
   </td>
   <td>larceny from the person or presence of another by violence or threat
   </td>
  </tr>
  <tr>
   <td>A2
   </td>
   <td>Assault 
   </td>
   <td>1
   </td>
   <td>the crime of trying or threatening to hurt someone physically
   </td>
  </tr>
  <tr>
   <td>A3
   </td>
   <td>Verbal Harassment  
   </td>
   <td>2
   </td>
   <td>intended to control or cause, or is capable of causing, death or serious bodily injury to oneself or others, or damage to property.
   </td>
  </tr>
  <tr>
   <td>A4
   </td>
   <td>Flu Outburst
   </td>
   <td>3
   </td>
   <td>More than 2 people have symptoms of illness
   </td>
  </tr>
</table>




* Levels

<table>
  <tr>
   <td>
<strong>id</strong>
   </td>
   <td><strong>name</strong>
   </td>
   <td><strong>Action</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>high
   </td>
   <td>Call 911
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>moderate
   </td>
   <td>Call Public Safety on Campus
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>low
   </td>
   <td>Make a report
   </td>
  </tr>
</table>