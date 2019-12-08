<?php

class Data
{
	private $connection;

	private $perPage = 5;

	public function __construct()
	{
		$conn = new mysqli('localhost', 'root', 'aurora', 'librafire_project');

		if( $conn->connect_error ){
			die('Error while connecting to database: ' . $conn->connect_error);
		}

		$this->connection = $conn;
	}

	public function allUsers()
	{
		$page = $_POST['currentPage'];

		if($page == 1){
			$start = 0;
			$end = $this->perPage;
		} else {
			$start = ( $page - 1 ) * $this->perPage;
			$end = $this->perPage;
		}

		$sqlAll = "SELECT * FROM users";

		$userDetails = $this->connection->query($sqlAll);

		$totalUsers = [];

		if( $userDetails ){
			while( $row = mysqli_fetch_object($userDetails) ){
				$totalUsers[] = $row;
			}
		}

		$total = count($totalUsers);

		$sql = "SELECT * FROM users LIMIT $start, $end";

		$records = $this->connection->query($sql);

		$users = [];

		if( $records ){
			while( $row = mysqli_fetch_object($records) ){
				$users[] = $row;
			}
		}

		$details = [];

		$details['total'] = $total;

		$details['data'] = $users;

		$details['pageDetail'] = $page;

		$details = json_encode($details);

		echo $details;
	}
}

$data = new Data();

$data->allUsers();